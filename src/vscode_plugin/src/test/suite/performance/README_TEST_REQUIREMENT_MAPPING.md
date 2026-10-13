# 测试用例与交付需求逐条映射

> 口径说明：
> - 已纳入 `performance` 目录下全部性能测试文件：dts2cpp（`conversion_ts*`）、C Parse（`conversion_c*`，h2dts/h2dtscpp 共用同一 `parseHeaderFile`）、H2DTS Gen（`conversion_h2dts_gen*`）、H2DTSCPP Gen（`conversion_h2dtscpp_gen*`）。
> - 每条 `test(...)` 均给出"主归属（2/3/4）+ 具体功能描述"：**2** = dts2cpp 链路、**3** = h2dts 链路、**4** = h2dtscpp 链路；C Parse 用例标注 `3/4`（h2dts 与 h2dtscpp 共用同一 parse 层）。
> - 功能描述取自各用例 `@tc.desc`。
> - 性能阈值：`PARSE_LOOP = 10`，`PARSE_TOTAL_MS = 6000`（单用例 10 次解析/生成总耗时 ≤ 6s）。

## 覆盖统计

- 纳入测试文件数：**297**
- 纳入用例总数：**7685**（dts2cpp 2618 + C Parse 2215 + H2DTS Gen 2349 + H2DTSCPP Gen 503）
- 统计方式：扫描所有 `*.test.ts` 文件中的 `test(...)` 声明（与 `@tc.number` 逐块一一对应，全量查重 0 重名）。

## 文件纳入清单

| 序号 | 测试文件 | 纳入用例数 |
| --- | --- | ---: |
| 1 | `conversion_tsunion.part01.test.ts` | 30 |
| 2 | `conversion_tsunion.part02.test.ts` | 30 |
| 3 | `conversion_tsunion.part03.test.ts` | 29 |
| 4 | `conversion_tsunion.part04.test.ts` | 30 |
| 5 | `conversion_tsunion.part05.test.ts` | 31 |
| 6 | `conversion_tsunion.part06.test.ts` | 35 |
| 7 | `conversion_tsunion.part07.test.ts` | 25 |
| 8 | `conversion_tsunion.part08.test.ts` | 50 |
| 9 | `conversion_tsunion.part09.test.ts` | 50 |
| 10 | `conversion_tsunion.part10.test.ts` | 50 |
| 11 | `conversion_tsunion.part11.test.ts` | 58 |
| 12 | `conversion_tsunion.part12.test.ts` | 58 |
| 13 | `conversion_tsunion.part13.test.ts` | 58 |
| 14 | `conversion_tsenum.part01.test.ts` | 29 |
| 15 | `conversion_tsenum.part02.test.ts` | 28 |
| 16 | `conversion_tsenum.part03.test.ts` | 95 |
| 17 | `conversion_tsenum.part04.test.ts` | 95 |
| 18 | `conversion_tsenum.part05.test.ts` | 94 |
| 19 | `conversion_tsenum.part06.test.ts` | 8 |
| 20 | `conversion_tsclass.part01.test.ts` | 26 |
| 21 | `conversion_tsclass.part02.test.ts` | 25 |
| 22 | `conversion_tsclass.part03.test.ts` | 87 |
| 23 | `conversion_tsclass.part04.test.ts` | 87 |
| 24 | `conversion_tsclass.part05.test.ts` | 85 |
| 25 | `conversion_tsclass.part06.test.ts` | 15 |
| 26 | `conversion_tsstruct.part01.test.ts` | 24 |
| 27 | `conversion_tsstruct.part02.test.ts` | 24 |
| 28 | `conversion_tsstruct.part03.test.ts` | 87 |
| 29 | `conversion_tsstruct.part04.test.ts` | 87 |
| 30 | `conversion_tsstruct.part05.test.ts` | 85 |
| 31 | `conversion_tsstruct.part06.test.ts` | 10 |
| 32 | `conversion_tsfunc.part01.test.ts` | 35 |
| 33 | `conversion_tsfunc.part02.test.ts` | 27 |
| 34 | `conversion_tsfunc.part03.test.ts` | 50 |
| 35 | `conversion_tsfunc.part04.test.ts` | 50 |
| 36 | `conversion_tsfunc.part05.test.ts` | 90 |
| 37 | `conversion_tsfunc.part06.test.ts` | 90 |
| 38 | `conversion_tsfunc.part07.test.ts` | 90 |
| 39 | `conversion_tsfunc.part08.test.ts` | 39 |
| 40 | `conversion_tstype.part01.test.ts` | 19 |
| 41 | `conversion_tstype.part02.test.ts` | 19 |
| 42 | `conversion_tstype.part03.test.ts` | 82 |
| 43 | `conversion_tstype.part04.test.ts` | 82 |
| 44 | `conversion_tstype.part05.test.ts` | 81 |
| 45 | `conversion_tstype.part06.test.ts` | 10 |
| 46 | `conversion_cfunc.part01.test.ts` | 42 |
| 47 | `conversion_cfunc.part02.test.ts` | 42 |
| 48 | `conversion_cfunc.part03.test.ts` | 41 |
| 49 | `conversion_cfunc.part04.test.ts` | 60 |
| 50 | `conversion_cfunc.part05.test.ts` | 57 |
| 51 | `conversion_cfunc.part06.test.ts` | 57 |
| 52 | `conversion_cfunc.part07.test.ts` | 54 |
| 53 | `conversion_cfunc.part08.test.ts` | 53 |
| 54 | `conversion_cfunc.part09.test.ts` | 53 |
| 55 | `conversion_cfunc.part10.test.ts` | 52 |
| 56 | `conversion_cfunc.part11.test.ts` | 48 |
| 57 | `conversion_cfunc.part12.test.ts` | 52 |
| 58 | `conversion_cfunc.part13.test.ts` | 55 |
| 59 | `conversion_cfunc.part14.test.ts` | 45 |
| 60 | `conversion_cfunc.part15.test.ts` | 28 |
| 61 | `conversion_cfunc.part16.test.ts` | 58 |
| 62 | `conversion_cfunc.part17.test.ts` | 58 |
| 63 | `conversion_cfunc.part18.test.ts` | 58 |
| 64 | `conversion_cfunc.part19.test.ts` | 54 |
| 65 | `conversion_cfunc.part20.test.ts` | 53 |
| 66 | `conversion_cfunc.part21.test.ts` | 53 |
| 67 | `conversion_cfunc.part22.test.ts` | 53 |
| 68 | `conversion_cfunc.part23.test.ts` | 26 |
| 69 | `conversion_cclass.part01.test.ts` | 27 |
| 70 | `conversion_cclass.part02.test.ts` | 37 |
| 71 | `conversion_cclass.part03.test.ts` | 37 |
| 72 | `conversion_cclass.part04.test.ts` | 36 |
| 73 | `conversion_cclass.part05.test.ts` | 31 |
| 74 | `conversion_cclass.part06.test.ts` | 12 |
| 75 | `conversion_cclass.part07.test.ts` | 27 |
| 76 | `conversion_cclass.part08.test.ts` | 30 |
| 77 | `conversion_cclass.part09.test.ts` | 10 |
| 78 | `conversion_cstruct.part01.test.ts` | 20 |
| 79 | `conversion_cstruct.part02.test.ts` | 41 |
| 80 | `conversion_cstruct.part03.test.ts` | 41 |
| 81 | `conversion_cstruct.part04.test.ts` | 27 |
| 82 | `conversion_cstruct.part05.test.ts` | 40 |
| 83 | `conversion_cstruct.part06.test.ts` | 6 |
| 84 | `conversion_cstruct.part07.test.ts` | 10 |
| 85 | `conversion_cenum.part01.test.ts` | 27 |
| 86 | `conversion_cenum.part02.test.ts` | 41 |
| 87 | `conversion_cenum.part03.test.ts` | 30 |
| 88 | `conversion_cenum.part04.test.ts` | 24 |
| 89 | `conversion_cenum.part05.test.ts` | 21 |
| 90 | `conversion_cenum.part06.test.ts` | 19 |
| 91 | `conversion_cenum.part07.test.ts` | 17 |
| 92 | `conversion_cenum.part08.test.ts` | 16 |
| 93 | `conversion_cenum.part09.test.ts` | 15 |
| 94 | `conversion_cenum.part10.test.ts` | 19 |
| 95 | `conversion_cenum.part11.test.ts` | 24 |
| 96 | `conversion_cunion.part01.test.ts` | 14 |
| 97 | `conversion_cunion.part02.test.ts` | 40 |
| 98 | `conversion_cunion.part03.test.ts` | 33 |
| 99 | `conversion_cunion.part04.test.ts` | 12 |
| 100 | `conversion_cnamespace.part01.test.ts` | 7 |
| 101 | `conversion_cnamespace.part02.test.ts` | 32 |
| 102 | `conversion_h2dts_gen.part01.test.ts` | 14 |
| 103 | `conversion_h2dts_gen.part02.test.ts` | 49 |
| 104 | `conversion_h2dts_gen.part03.test.ts` | 39 |
| 105 | `conversion_h2dts_gen.part04.test.ts` | 36 |
| 106 | `conversion_h2dts_gen.part05.test.ts` | 24 |
| 107 | `conversion_h2dts_gen.part06.test.ts` | 23 |
| 108 | `conversion_h2dtscpp_gen.part01.test.ts` | 10 |
| 109 | `conversion_h2dtscpp_gen.part02.test.ts` | 21 |
| 110 | `conversion_h2dtscpp_gen.part03.test.ts` | 11 |
| 111 | `conversion_h2dtscpp_gen.part04.test.ts` | 10 |
| 112 | `conversion_cclass.part10.test.ts` | 4 |
| 113 | `conversion_cclass.part11.test.ts` | 5 |
| 114 | `conversion_cclass.part12.test.ts` | 2 |
| 115 | `conversion_cclass.part13.test.ts` | 2 |
| 116 | `conversion_cclass.part14.test.ts` | 3 |
| 117 | `conversion_cclass.part15.test.ts` | 3 |
| 118 | `conversion_cclass.part16.test.ts` | 3 |
| 119 | `conversion_cenum.part12.test.ts` | 3 |
| 120 | `conversion_cenum.part13.test.ts` | 3 |
| 121 | `conversion_cenum.part14.test.ts` | 1 |
| 122 | `conversion_cenum.part15.test.ts` | 1 |
| 123 | `conversion_cenum.part16.test.ts` | 1 |
| 124 | `conversion_cenum.part17.test.ts` | 1 |
| 125 | `conversion_cenum.part18.test.ts` | 1 |
| 126 | `conversion_cfunc.part24.test.ts` | 5 |
| 127 | `conversion_cfunc.part25.test.ts` | 7 |
| 128 | `conversion_cfunc.part26.test.ts` | 4 |
| 129 | `conversion_cfunc.part27.test.ts` | 4 |
| 130 | `conversion_cfunc.part28.test.ts` | 35 |
| 131 | `conversion_cfunc.part29.test.ts` | 35 |
| 132 | `conversion_cfunc.part30.test.ts` | 30 |
| 133 | `conversion_cfunc.part31.test.ts` | 17 |
| 134 | `conversion_cnamespace.part03.test.ts` | 3 |
| 135 | `conversion_cnamespace.part04.test.ts` | 4 |
| 136 | `conversion_cnamespace.part05.test.ts` | 2 |
| 137 | `conversion_cnamespace.part06.test.ts` | 2 |
| 138 | `conversion_cnamespace.part07.test.ts` | 4 |
| 139 | `conversion_cnamespace.part08.test.ts` | 8 |
| 140 | `conversion_cstruct.part08.test.ts` | 4 |
| 141 | `conversion_cstruct.part09.test.ts` | 5 |
| 142 | `conversion_cstruct.part10.test.ts` | 3 |
| 143 | `conversion_cstruct.part11.test.ts` | 3 |
| 144 | `conversion_cstruct.part12.test.ts` | 2 |
| 145 | `conversion_cstruct.part13.test.ts` | 3 |
| 146 | `conversion_cstruct.part14.test.ts` | 3 |
| 147 | `conversion_cunion.part05.test.ts` | 5 |
| 148 | `conversion_cunion.part06.test.ts` | 4 |
| 149 | `conversion_cunion.part07.test.ts` | 2 |
| 150 | `conversion_cunion.part08.test.ts` | 2 |
| 151 | `conversion_cunion.part09.test.ts` | 3 |
| 152 | `conversion_cunion.part10.test.ts` | 4 |
| 153 | `conversion_cunion.part11.test.ts` | 4 |
| 154 | `conversion_h2dts_gen.part08.test.ts` | 35 |
| 155 | `conversion_h2dts_gen.part09.test.ts` | 35 |
| 156 | `conversion_h2dts_gen.part14.test.ts` | 35 |
| 157 | `conversion_h2dts_gen.part15.test.ts` | 35 |
| 158 | `conversion_h2dts_gen.part16.test.ts` | 35 |
| 159 | `conversion_h2dts_gen.part17.test.ts` | 35 |
| 160 | `conversion_h2dts_gen.part30.test.ts` | 35 |
| 161 | `conversion_h2dts_gen.part32.test.ts` | 35 |
| 162 | `conversion_h2dts_gen.part40.test.ts` | 15 |
| 163 | `conversion_h2dts_gen.part42.test.ts` | 35 |
| 164 | `conversion_h2dts_gen.part46.test.ts` | 35 |
| 165 | `conversion_h2dts_gen.part47.test.ts` | 35 |
| 166 | `conversion_h2dts_gen.part48.test.ts` | 35 |
| 167 | `conversion_h2dts_gen.part50.test.ts` | 35 |
| 168 | `conversion_h2dts_gen.part55.test.ts` | 35 |
| 169 | `conversion_h2dts_gen.part56.test.ts` | 35 |
| 170 | `conversion_h2dts_gen.part58.test.ts` | 35 |
| 171 | `conversion_h2dts_gen.part59.test.ts` | 35 |
| 172 | `conversion_h2dts_gen.part60.test.ts` | 35 |
| 173 | `conversion_h2dts_gen.part61.test.ts` | 35 |
| 174 | `conversion_h2dts_gen.part62.test.ts` | 20 |
| 175 | `conversion_h2dts_gen.part64.test.ts` | 35 |
| 176 | `conversion_h2dts_gen.part65.test.ts` | 35 |
| 177 | `conversion_h2dts_gen.part67.test.ts` | 35 |
| 178 | `conversion_h2dts_gen.part68.test.ts` | 35 |
| 179 | `conversion_h2dts_gen.part69.test.ts` | 35 |
| 180 | `conversion_h2dts_gen.part70.test.ts` | 35 |
| 181 | `conversion_h2dts_gen.part71.test.ts` | 35 |
| 182 | `conversion_h2dts_gen.part72.test.ts` | 35 |
| 183 | `conversion_h2dts_gen.part73.test.ts` | 35 |
| 184 | `conversion_h2dts_gen.part86.test.ts` | 35 |
| 185 | `conversion_h2dts_gen.part87.test.ts` | 35 |
| 186 | `conversion_h2dts_gen.part88.test.ts` | 35 |
| 187 | `conversion_h2dts_gen.part95.test.ts` | 35 |
| 188 | `conversion_h2dts_gen.part97.test.ts` | 35 |
| 189 | `conversion_h2dts_gen.part98.test.ts` | 35 |
| 190 | `conversion_h2dts_gen.part99.test.ts` | 35 |
| 191 | `conversion_h2dts_gen.part100.test.ts` | 35 |
| 192 | `conversion_h2dts_gen.part101.test.ts` | 35 |
| 193 | `conversion_h2dts_gen.part106.test.ts` | 35 |
| 194 | `conversion_h2dts_gen.part107.test.ts` | 35 |
| 195 | `conversion_h2dts_gen.part108.test.ts` | 35 |
| 196 | `conversion_h2dts_gen.part109.test.ts` | 35 |
| 197 | `conversion_h2dts_gen.part110.test.ts` | 35 |
| 198 | `conversion_h2dts_gen.part111.test.ts` | 35 |
| 199 | `conversion_h2dts_gen.part112.test.ts` | 4 |
| 200 | `conversion_h2dts_gen.part114.test.ts` | 35 |
| 201 | `conversion_h2dts_gen.part115.test.ts` | 35 |
| 202 | `conversion_h2dts_gen.part120.test.ts` | 35 |
| 203 | `conversion_h2dts_gen.part121.test.ts` | 35 |
| 204 | `conversion_h2dts_gen.part122.test.ts` | 35 |
| 205 | `conversion_h2dts_gen.part123.test.ts` | 35 |
| 206 | `conversion_h2dts_gen.part136.test.ts` | 35 |
| 207 | `conversion_h2dts_gen.part138.test.ts` | 35 |
| 208 | `conversion_h2dts_gen.part145.test.ts` | 35 |
| 209 | `conversion_h2dts_gen.part149.test.ts` | 35 |
| 210 | `conversion_h2dts_gen.part150.test.ts` | 35 |
| 211 | `conversion_h2dts_gen.part151.test.ts` | 35 |
| 212 | `conversion_h2dts_gen.part156.test.ts` | 35 |
| 213 | `conversion_h2dts_gen.part157.test.ts` | 35 |
| 214 | `conversion_h2dts_gen.part158.test.ts` | 35 |
| 215 | `conversion_h2dts_gen.part159.test.ts` | 35 |
| 216 | `conversion_h2dts_gen.part160.test.ts` | 35 |
| 217 | `conversion_h2dts_gen.part161.test.ts` | 25 |
| 218 | `conversion_h2dtscpp_gen.part05.test.ts` | 35 |
| 219 | `conversion_h2dtscpp_gen.part06.test.ts` | 30 |
| 220 | `conversion_h2dtscpp_gen.part06b.test.ts` | 2 |
| 221 | `conversion_h2dtscpp_gen.part07.test.ts` | 30 |
| 222 | `conversion_h2dtscpp_gen.part07b.test.ts` | 2 |
| 223 | `conversion_h2dtscpp_gen.part08.test.ts` | 30 |
| 224 | `conversion_h2dtscpp_gen.part08b.test.ts` | 2 |
| 225 | `conversion_h2dtscpp_gen.part09.test.ts` | 30 |
| 226 | `conversion_h2dtscpp_gen.part09b.test.ts` | 2 |
| 227 | `conversion_h2dtscpp_gen.part10.test.ts` | 30 |
| 228 | `conversion_h2dtscpp_gen.part10b.test.ts` | 2 |
| 229 | `conversion_h2dtscpp_gen.part11.test.ts` | 19 |
| 230 | `conversion_h2dtscpp_gen.part12.test.ts` | 10 |
| 231 | `conversion_h2dtscpp_gen.part13.test.ts` | 15 |
| 232 | `conversion_h2dtscpp_gen.part14.test.ts` | 15 |
| 233 | `conversion_h2dtscpp_gen.part15.test.ts` | 35 |
| 234 | `conversion_h2dtscpp_gen.part16.test.ts` | 35 |
| 235 | `conversion_h2dtscpp_gen.part17.test.ts` | 35 |
| 236 | `conversion_h2dtscpp_gen.part18.test.ts` | 21 |
| 237 | `conversion_h2dtscpp_gen.part19.test.ts` | 31 |
| 238 | `conversion_h2dtscpp_gen.part20.test.ts` | 23 |
| 239 | `conversion_h2dtscpp_gen.part21.test.ts` | 17 |
| 240 | `conversion_tsclass.part03a.test.ts` | 39 |
| 241 | `conversion_tsclass.part03b.test.ts` | 39 |
| 242 | `conversion_tsclass.part03c.test.ts` | 9 |
| 243 | `conversion_tsclass.part04a.test.ts` | 39 |
| 244 | `conversion_tsclass.part04b.test.ts` | 39 |
| 245 | `conversion_tsclass.part04c.test.ts` | 9 |
| 246 | `conversion_tsclass.part05a.test.ts` | 31 |
| 247 | `conversion_tsclass.part05b.test.ts` | 31 |
| 248 | `conversion_tsclass.part05c.test.ts` | 23 |
| 249 | `conversion_tsclass.part07.test.ts` | 19 |
| 250 | `conversion_tsclass.part08.test.ts` | 6 |
| 251 | `conversion_tsclass.part09.test.ts` | 6 |
| 252 | `conversion_tsclass.part10.test.ts` | 5 |
| 253 | `conversion_tsenum.part03a.test.ts` | 38 |
| 254 | `conversion_tsenum.part03b.test.ts` | 29 |
| 255 | `conversion_tsenum.part03c.test.ts` | 24 |
| 256 | `conversion_tsenum.part03d.test.ts` | 4 |
| 257 | `conversion_tsenum.part04a.test.ts` | 21 |
| 258 | `conversion_tsenum.part04b.test.ts` | 19 |
| 259 | `conversion_tsenum.part04c.test.ts` | 17 |
| 260 | `conversion_tsenum.part04d.test.ts` | 16 |
| 261 | `conversion_tsenum.part04e.test.ts` | 15 |
| 262 | `conversion_tsenum.part04f.test.ts` | 7 |
| 263 | `conversion_tsenum.part05a.test.ts` | 14 |
| 264 | `conversion_tsenum.part05b.test.ts` | 14 |
| 265 | `conversion_tsenum.part05c.test.ts` | 13 |
| 266 | `conversion_tsenum.part05d.test.ts` | 31 |
| 267 | `conversion_tsenum.part05e.test.ts` | 22 |
| 268 | `conversion_tsenum.part07.test.ts` | 10 |
| 269 | `conversion_tsenum.part08.test.ts` | 8 |
| 270 | `conversion_tsenum.part09.test.ts` | 5 |
| 271 | `conversion_tsfunc.part05a.test.ts` | 50 |
| 272 | `conversion_tsfunc.part05b.test.ts` | 40 |
| 273 | `conversion_tsfunc.part06a.test.ts` | 48 |
| 274 | `conversion_tsfunc.part06b.test.ts` | 42 |
| 275 | `conversion_tsfunc.part07a.test.ts` | 52 |
| 276 | `conversion_tsfunc.part07b.test.ts` | 38 |
| 277 | `conversion_tsfunc.part09.test.ts` | 35 |
| 278 | `conversion_tsfunc.part10.test.ts` | 35 |
| 279 | `conversion_tsfunc.part11.test.ts` | 35 |
| 280 | `conversion_tsfunc.part12.test.ts` | 15 |
| 281 | `conversion_tsfunc.part13.test.ts` | 35 |
| 282 | `conversion_tsfunc.part14.test.ts` | 1 |
| 283 | `conversion_tsfunc.part15.test.ts` | 30 |
| 284 | `conversion_tsfunc.part16.test.ts` | 1 |
| 285 | `conversion_tsfunc.part17.test.ts` | 13 |
| 286 | `conversion_tsstruct.part03a.test.ts` | 39 |
| 287 | `conversion_tsstruct.part03b.test.ts` | 39 |
| 288 | `conversion_tsstruct.part03c.test.ts` | 9 |
| 289 | `conversion_tsstruct.part04a.test.ts` | 39 |
| 290 | `conversion_tsstruct.part04b.test.ts` | 39 |
| 291 | `conversion_tsstruct.part04c.test.ts` | 9 |
| 292 | `conversion_tsstruct.part05a.test.ts` | 31 |
| 293 | `conversion_tsstruct.part05b.test.ts` | 31 |
| 294 | `conversion_tsstruct.part05c.test.ts` | 23 |
| 295 | `conversion_tsstruct.part07.test.ts` | 15 |
| 296 | `conversion_tstype.part03a.test.ts` | 39 |
| 297 | `conversion_tstype.part03b.test.ts` | 39 |
| 298 | `conversion_tstype.part03c.test.ts` | 4 |
| 299 | `conversion_tstype.part04a.test.ts` | 39 |
| 300 | `conversion_tstype.part04b.test.ts` | 38 |
| 301 | `conversion_tstype.part04c.test.ts` | 5 |
| 302 | `conversion_tstype.part05a.test.ts` | 28 |
| 303 | `conversion_tstype.part05b.test.ts` | 44 |
| 304 | `conversion_tstype.part05c.test.ts` | 9 |
| 305 | `conversion_tstype.part07.test.ts` | 10 |
| 306 | `conversion_tstype.part08.test.ts` | 10 |
| 307 | `conversion_tstype.part09.test.ts` | 15 |
| 308 | `conversion_tsunion.part11a.test.ts` | 51 |
| 309 | `conversion_tsunion.part11b.test.ts` | 7 |
| 310 | `conversion_tsunion.part12a.test.ts` | 54 |
| 311 | `conversion_tsunion.part12b.test.ts` | 4 |
| 312 | `conversion_tsunion.part13a.test.ts` | 53 |
| 313 | `conversion_tsunion.part13b.test.ts` | 5 |
| 314 | `conversion_tsunion.part14.test.ts` | 15 |
| 315 | `conversion_tsunion.part15.test.ts` | 5 |

## 用例逐条映射总表

| 序号 | 测试文件 | 用例名 | 测试类别 | 对应交付指标主归属（2/3/4） | 对应功能（具体交付内容） |
| --- | --- | --- | --- | --- | --- |
| 1 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0001` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0001 = string | number` 的解析结果与性能。 |
| 2 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0002` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0002 = string | boolean` 的解析结果与性能。 |
| 3 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0003` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0003 = number | boolean` 的解析结果与性能。 |
| 4 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0004` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0004 = string | any` 的解析结果与性能。 |
| 5 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0005` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0005 = string | unknown` 的解析结果与性能。 |
| 6 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0006` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0006 = string | never` 的解析结果与性能。 |
| 7 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0007` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0007 = string | null` 的解析结果与性能。 |
| 8 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0008` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0008 = string | undefined` 的解析结果与性能。 |
| 9 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0009` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0009 = string | null | undefined` 的解析结果与性能。 |
| 10 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0010` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0010 = string | symbol` 的解析结果与性能。 |
| 11 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0011` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0011 = bigint | number` 的解析结果与性能。 |
| 12 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0012` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0012 = object | string` 的解析结果与性能。 |
| 13 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0013` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0013 = "left" | "right" | "center"` 的解析结果与性能。 |
| 14 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0014` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0014 = "success" | "error" | 0` 的解析结果与性能。 |
| 15 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0015` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0015 = -1 | 0 | 1` 的解析结果与性能。 |
| 16 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0016` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0016 = true | false` 的解析结果与性能。 |
| 17 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0017` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0017 = 1 | 2 | 3 | 4 | 5` 的解析结果与性能。 |
| 18 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0018` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0018 = string | number[]` 的解析结果与性能。 |
| 19 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0019` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0019 = string[] | number[]` 的解析结果与性能。 |
| 20 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0020` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0020 = Array<string> | Array<number>` 的解析结果与性能。 |
| 21 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0021` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0021 = string[] | Array<number>` 的解析结果与性能。 |
| 22 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0022` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0022 = ReadonlyArray<string> | ReadonlyArray<number>` 的解析结果与性能。 |
| 23 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0023` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0023 = Array<string | number> | boolean[]` 的解析结果与性能。 |
| 24 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0024` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0024 = Set<string> | Set<number>` 的解析结果与性能。 |
| 25 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0025` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0025 = Set<string> | string[]` 的解析结果与性能。 |
| 26 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0026` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0026 = ReadonlySet<string> | Set<string>` 的解析结果与性能。 |
| 27 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0027` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0027 = WeakSet<object> | Set<object>` 的解析结果与性能。 |
| 28 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0028` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0028 = [string, number] | [boolean]` 的解析结果与性能。 |
| 29 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0029` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0029 = [string, number] | string[]` 的解析结果与性能。 |
| 30 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0030` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0030 = [number, string] | [string, number]` 的解析结果与性能。 |
| 31 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0031` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0031 = readonly [string, number] | [string, number]` 的解析结果与性能。 |
| 32 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0032` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0032 = [string, ...number[]] | string[]` 的解析结果与性能。 |
| 33 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0033` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0033 = Map<string, number> | Map<string, boolean>` 的解析结果与性能。 |
| 34 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0034` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0034 = Map<string, any> | Record<string, number>` 的解析结果与性能。 |
| 35 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0035` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0035 = Record<string, string> | Record<string, number>` 的解析结果与性能。 |
| 36 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0036` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0036 = ReadonlyMap<string, number> | Map<string, number>` 的解析结果与性能。 |
| 37 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0037` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0037 = WeakMap<object, string> | Map<object, string>` 的解析结果与性能。 |
| 38 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0038` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0038 = Map<string, number[]> | Record<string, number[]>` 的解析结果与性能。 |
| 39 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0039` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0039 = boolean | ((s: string) => boolean)` 的解析结果与性能。 |
| 40 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0040` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0040 = (() => string) | (() => number)` 的解析结果与性能。 |
| 41 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0041` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0041 = ((value: string) => void) | ((value: number) => void)` 的解析结果与性能。 |
| 42 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0042` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0042 = Promise<string> | Promise<number>` 的解析结果与性能。 |
| 43 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0043` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0043 = Promise<string> | string` 的解析结果与性能。 |
| 44 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0044` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0044 = PromiseLike<string> | Promise<string>` 的解析结果与性能。 |
| 45 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0045` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0045 = Array<Map<string, number>> | Map<string, number[]>` 的解析结果与性能。 |
| 46 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0046` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0046 = Set<string[]> | Array<Set<string>>` 的解析结果与性能。 |
| 47 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0047` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0047 = Map<string, Set<number>> | Set<Map<string, number>>` 的解析结果与性能。 |
| 48 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0048` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0048 = [Map<string, number>, Set<boolean>] | Array<string>` 的解析结果与性能。 |
| 49 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0049` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0049 = number[] | Set<number> | Map<string, number>` 的解析结果与性能。 |
| 50 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0050` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0050 = [number, string] | Map<number, string> | Set<[number, string]>` 的解析结果与性能。 |
| 51 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0051` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0051 = string | number | boolean | null | undefined` 的解析结果与性能。 |
| 52 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0052` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0052 = string[] | Set<string> | Map<string, string> | [string]` 的解析结果与性能。 |
| 53 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0053` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0053 = Options | "auto"` 的解析结果与性能。 |
| 54 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0054` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0054 = Success | Failure` 的解析结果与性能。 |
| 55 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0055` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0055 = Circle | Square` 的解析结果与性能。 |
| 56 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0056` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0056 = Base | Derived` 的解析结果与性能。 |
| 57 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0057` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0057 = Status | string` 的解析结果与性能。 |
| 58 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0058` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0058 = UserId | OrderId` 的解析结果与性能。 |
| 59 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0059` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0059 = T[] | Set<T>` 的解析结果与性能。 |
| 60 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0060` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0060 = Array<Options> | Map<string, Options>` 的解析结果与性能。 |
| 61 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0061` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0061 = { id: number } | { name: string }` 的解析结果与性能。 |
| 62 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0062` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0062 = { type: "text"; value: string } | { type: "count"; value: number }` 的解析结果与性能。 |
| 63 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0063` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0063 = { readonly id: number } | null` 的解析结果与性能。 |
| 64 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0064` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0064 = keyof Options | "auto"` 的解析结果与性能。 |
| 65 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0065` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0065 = Options[keyof Options] | null` 的解析结果与性能。 |
| 66 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0066` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0066 = typeof DEFAULT_VALUE | number` 的解析结果与性能。 |
| 67 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0067` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0067 = Date | RegExp` 的解析结果与性能。 |
| 68 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0068` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0068 = Error | string` 的解析结果与性能。 |
| 69 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0069` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0069 = ArrayBuffer | Uint8Array` 的解析结果与性能。 |
| 70 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0070` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0070 = Int8Array | Uint8Array` 的解析结果与性能。 |
| 71 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0071` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0071 = number | `${number}px`` 的解析结果与性能。 |
| 72 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0072` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0072 = `get${string}` | `set${string}`` 的解析结果与性能。 |
| 73 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0073` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0073 = string & { readonly brand: unique symbol } | number` 的解析结果与性能。 |
| 74 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0074` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0074 = (string & {}) | number` 的解析结果与性能。 |
| 75 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0075` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0075 = Partial<Options> | Required<Options>` 的解析结果与性能。 |
| 76 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0076` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0076 = Pick<Options, "width"> | Omit<Options, "width">` 的解析结果与性能。 |
| 77 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0077` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0077 = Readonly<Options> | Options` 的解析结果与性能。 |
| 78 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0078` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0078 = Record<"a" | "b", number> | Map<string, number>` 的解析结果与性能。 |
| 79 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0079` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0079 = NonNullable<string | null> | number` 的解析结果与性能。 |
| 80 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0080` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0080 = Exclude<string | number, string> | boolean` 的解析结果与性能。 |
| 81 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0081` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0081 = Extract<string | number, string> | boolean` 的解析结果与性能。 |
| 82 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0082` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0082 = Awaited<Promise<string>> | number` 的解析结果与性能。 |
| 83 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0083` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0083 = ReturnType<() => string> | number` 的解析结果与性能。 |
| 84 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0084` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0084 = Parameters<(s: string) => void> | [number]` 的解析结果与性能。 |
| 85 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0085` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0085 = ConstructorParameters<ErrorConstructor> | [string]` 的解析结果与性能。 |
| 86 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0086` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0086 = InstanceType<typeof Error> | string` 的解析结果与性能。 |
| 87 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0087` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0087 = ThisParameterType<(this: Date) => void> | string` 的解析结果与性能。 |
| 88 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0088` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0088 = Uppercase<"a"> | Lowercase<"B">` 的解析结果与性能。 |
| 89 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0089` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0089 = Capitalize<"name"> | Uncapitalize<"Title">` 的解析结果与性能。 |
| 90 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0090` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0090 = '${EmailLocaleIDs | FooterLocaleIDs}_id';` 的解析结果与性能。 |
| 91 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0091` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0091 = Awaited<boolean | Promise<number>>;` 的解析结果与性能。 |
| 92 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0092` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `interface Todo { title: string; completed: boolean; createdAt: number; }` 的解析结果与性能。 |
| 93 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0093` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `interface Todo { title: string; completed: boolean; createdAt: number; }` 的解析结果与性能。 |
| 94 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0094` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0094 = Exclude<"a" | "b" | "c", "a">;` 的解析结果与性能。 |
| 95 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0095` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0095 = Extract<"a" | "b" | "c", "a" | "f">;` 的解析结果与性能。 |
| 96 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0096` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0096 = NonNullable<string | number | undefined>;` 的解析结果与性能。 |
| 97 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0097` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0097 = boolean | (s: string) => boolean;` 的解析结果与性能。 |
| 98 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0098` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0098 = string | undefined & null;` 的解析结果与性能。 |
| 99 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0099` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0099 = (string | number) | boolean;` 的解析结果与性能。 |
| 100 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0100` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0100 = void | string;` 的解析结果与性能。 |
| 101 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0101` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0101 = (Map<string, number> | Record<string, number>) | Set<string>;` 的解析结果与性能。 |
| 102 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0102` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0102 = "a" | "b" | "c" | "d" | "e" | "f";` 的解析结果与性能。 |
| 103 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0103` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `declare function f1(): { a: number; b: string };` 的解析结果与性能。 |
| 104 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0104` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0106 = ConstructorParameters<ErrorConstructor>;` 的解析结果与性能。 |
| 105 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0105` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `declare function f1(): { a: number; b: string };` 的解析结果与性能。 |
| 106 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0106` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `class C { x = 0; y = 0; }` 的解析结果与性能。 |
| 107 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0107` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0115 = Exclude<"a" | "b" | "c", "a"> | Exclude<"x" | "y", "x">;` 的解析结果与性能。 |
| 108 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0108` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0116 = Extract<string | number | (() => void), Function> | string;` 的解析结果与性能。 |
| 109 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0109` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0117 = NonNullable<string[] | null | undefined> | number;` 的解析结果与性能。 |
| 110 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0110` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0118 = Awaited<Promise<string> | Promise<number>> | boolean;` 的解析结果与性能。 |
| 111 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0111` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0119 = 'T_${EmailLocaleIDs | FooterLocaleIDs}_id';` 的解析结果与性能。 |
| 112 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0112` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0120 = Readonly<[string, number]> | [number, string];` 的解析结果与性能。 |
| 113 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0113` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0121 = readonly (string | number)[] | Array<string | number>;` 的解析结果与性能。 |
| 114 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0114` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0122 = WeakRef<object> | FinalizationRegistry<object>;` 的解析结果与性能。 |
| 115 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0115` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0123 = DataView | Uint8ClampedArray | Float64Array;` 的解析结果与性能。 |
| 116 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0116` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0124 = unique symbol | typeof Symbol.iterator;` 的解析结果与性能。 |
| 117 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0117` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0125 = import("node:fs").Stats | string;` 的解析结果与性能。 |
| 118 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0118` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0126 = { [K in "a" | "b"]: number } | Record<string, never>;` 的解析结果与性能。 |
| 119 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0119` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0127 = ((...args: never[]) => void) | ((value: string) => number);` 的解析结果与性能。 |
| 120 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0120` | 性能测试 | 2 | dts2cpp union type alias Exclude 批量（3 个 type，对齐 parsetsunion test_16） |
| 121 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0121` | 性能测试 | 2 | dts2cpp union type alias Parameters 全量批量 T0-T7（对齐 parsetsunion test_19） |
| 122 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0122` | 性能测试 | 2 | dts2cpp union type alias ReturnType 全量批量 T0-T8（对齐 parsetsunion test_21） |
| 123 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0123` | 性能测试 | 2 | dts2cpp union type alias ConstructorParameters 全量批量（对齐 parsetsunion test_20） |
| 124 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0124` | 性能测试 | 2 | dts2cpp union type alias InstanceType 全量批量（对齐 parsetsunion test_22） |
| 125 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0125` | 性能测试 | 2 | dts2cpp union type alias Extract 批量（对齐 parsetsunion test_17） |
| 126 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0126` | 性能测试 | 2 | dts2cpp union type alias NonNullable 批量（对齐 parsetsunion test_18） |
| 127 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0127` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0154 = Float32Array | Float64Array | Int16Array | Int32Array` 的解析结果与性能。 |
| 128 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0128` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0155 = Generator<string, number, boolean> | AsyncGenerator<string, number, boolean>` 的解析结果与性能。 |
| 129 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0129` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0156 = Iterator<string> | Iterable<string> | IterableIterator<string>` 的解析结果与性能。 |
| 130 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0130` | 性能测试 | 2 | dts2cpp union type alias 接口判别联合 Node | Leaf | Branch 的解析结果与性能。 |
| 131 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0131` | 性能测试 | 2 | dts2cpp union type alias enum + 字面量 + 模板字面量联合 的解析结果与性能。 |
| 132 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0132` | 性能测试 | 2 | dts2cpp union type alias Map/Record 字面量 key 联合 的解析结果与性能。 |
| 133 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0133` | 性能测试 | 2 | dts2cpp union type alias Partial/Required Record 联合 的解析结果与性能。 |
| 134 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0134` | 性能测试 | 2 | dts2cpp union type alias 可变/只读 rest tuple 联合 的解析结果与性能。 |
| 135 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0135` | 性能测试 | 2 | dts2cpp union type alias Awaited<Promise<union>> | boolean 的解析结果与性能。 |
| 136 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0136` | 性能测试 | 2 | dts2cpp union type alias Omit/Pick 组合联合 的解析结果与性能。 |
| 137 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0137` | 性能测试 | 2 | dts2cpp union type alias Extract/Exclude 组合联合 的解析结果与性能。 |
| 138 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0138` | 性能测试 | 2 | dts2cpp union type alias Record<number,string> | Record<string,number> 的解析结果与性能。 |
| 139 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0139` | 性能测试 | 2 | dts2cpp union type alias 抽象/具体构造签名联合 的解析结果与性能。 |
| 140 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0140` | 性能测试 | 2 | dts2cpp union type alias unique symbol / typeof Symbol / symbol 联合 的解析结果与性能。 |
| 141 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0141` | 性能测试 | 2 | dts2cpp union type alias WeakRef/WeakSet/WeakMap/FinalizationRegistry 四元联合 的解析结果与性能。 |
| 142 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0142` | 性能测试 | 2 | dts2cpp union type alias 嵌套模板字面量联合 的解析结果与性能。 |
| 143 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0143` | 性能测试 | 2 | dts2cpp union type alias mapped type 与对象类型联合 的解析结果与性能。 |
| 144 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0144` | 性能测试 | 2 | dts2cpp union type alias 模板字面量前缀 T_（对齐 parsetsunion test_41） |
| 145 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0145` | 性能测试 | 2 | dts2cpp union type alias 八成员 mega union（基本+容器+tuple）的解析结果与性能。 |
| 146 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0146` | 性能测试 | 2 | dts2cpp union type alias ReadonlyMap | Map 联合 的解析结果与性能。 |
| 147 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0147` | 性能测试 | 2 | dts2cpp union type alias ProxyHandler | object 联合 的解析结果与性能。 |
| 148 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0148` | 性能测试 | 2 | dts2cpp union type alias 条件类型结果联合 的解析结果与性能。 |
| 149 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0149` | 性能测试 | 2 | dts2cpp union type alias 泛型默认 union 参数 的解析结果与性能。 |
| 150 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0150` | 性能测试 | 2 | dts2cpp union type alias keyof + indexed access 联合 的解析结果与性能。 |
| 151 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0151` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0178 = null | undefined` 的解析结果与性能。 |
| 152 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0152` | 性能测试 | 2 | dts2cpp union type alias bigint 字面量联合 的解析结果与性能。 |
| 153 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0153` | 性能测试 | 2 | dts2cpp union type alias 浮点字面量联合 的解析结果与性能。 |
| 154 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0154` | 性能测试 | 2 | dts2cpp union type alias 三接口联合 Err | Warn | Info 的解析结果与性能。 |
| 155 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0155` | 性能测试 | 2 | dts2cpp union type alias Error 继承链联合 的解析结果与性能。 |
| 156 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0156` | 性能测试 | 2 | dts2cpp union type alias Date | number | string 的解析结果与性能。 |
| 157 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0157` | 性能测试 | 2 | dts2cpp union type alias RegExp | string 的解析结果与性能。 |
| 158 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0158` | 性能测试 | 2 | dts2cpp union type alias ArrayBuffer 系列联合 的解析结果与性能。 |
| 159 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0159` | 性能测试 | 2 | dts2cpp union type alias Map 泛型参数内含 union 的解析结果与性能。 |
| 160 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0160` | 性能测试 | 2 | dts2cpp union type alias Array 泛型参数内含 union 的解析结果与性能。 |
| 161 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0161` | 性能测试 | 2 | dts2cpp union type alias Record key/value 含 union 的解析结果与性能。 |
| 162 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0162` | 性能测试 | 2 | dts2cpp union type alias Promise<void> | void 的解析结果与性能。 |
| 163 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0163` | 性能测试 | 2 | dts2cpp union type alias never/void 返回函数联合 的解析结果与性能。 |
| 164 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0164` | 性能测试 | 2 | dts2cpp union type alias 索引签名对象联合 的解析结果与性能。 |
| 165 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0165` | 性能测试 | 2 | dts2cpp union type alias 可选属性对象联合 的解析结果与性能。 |
| 166 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0166` | 性能测试 | 2 | dts2cpp union type alias 泛型 Box 接口联合 的解析结果与性能。 |
| 167 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0167` | 性能测试 | 2 | dts2cpp union type alias (string|number)[] 与成员混联合 的解析结果与性能。 |
| 168 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0168` | 性能测试 | 2 | dts2cpp union type alias readonly 数组两种写法联合 的解析结果与性能。 |
| 169 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0169` | 性能测试 | 2 | dts2cpp union type alias 可选元素 tuple 联合 的解析结果与性能。 |
| 170 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0170` | 性能测试 | 2 | dts2cpp union type alias 状态字面量联合 idle/loading/success/error/cancelled 的解析结果与性能。 |
| 171 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0171` | 性能测试 | 2 | dts2cpp union type alias 平台字面量联合 web/ios/android/harmony/windows 的解析结果与性能。 |
| 172 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0172` | 性能测试 | 2 | dts2cpp union type alias Pick | Omit 组合联合 的解析结果与性能。 |
| 173 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0173` | 性能测试 | 2 | dts2cpp union type alias prefix/suffix 模板字面量联合 的解析结果与性能。 |
| 174 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0174` | 性能测试 | 2 | dts2cpp union type alias CSS 单位模板字面量联合 的解析结果与性能。 |
| 175 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0175` | 性能测试 | 2 | dts2cpp union type alias Function | string | number 的解析结果与性能。 |
| 176 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0176` | 性能测试 | 2 | dts2cpp union type alias IArguments | unknown[] 的解析结果与性能。 |
| 177 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0177` | 性能测试 | 2 | dts2cpp union type alias URL | string 的解析结果与性能。 |
| 178 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0178` | 性能测试 | 2 | dts2cpp union type alias 构造签名 | Date 联合（alias 形态）的解析结果与性能。 |
| 179 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0179` | 性能测试 | 2 | dts2cpp union type alias typeof globalThis | typeof window 的解析结果与性能。 |
| 180 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0180` | 性能测试 | 2 | dts2cpp union type alias kind 判别联合 circle/rect/tri 的解析结果与性能。 |
| 181 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0181` | 性能测试 | 2 | dts2cpp union type alias 权限字面量 read/write/execute/admin 的解析结果与性能。 |
| 182 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0182` | 性能测试 | 2 | dts2cpp union type alias 通道数字字面量 1|2|3|4|5|6 的解析结果与性能。 |
| 183 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0183` | 性能测试 | 2 | dts2cpp union type alias branded intersection 联合 的解析结果与性能。 |
| 184 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0184` | 性能测试 | 2 | dts2cpp union type alias 类型别名引用 U|V|boolean 的解析结果与性能。 |
| 185 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0185` | 性能测试 | 2 | dts2cpp union type alias ReadonlySet | ReadonlyMap | readonly array 的解析结果与性能。 |
| 186 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0186` | 性能测试 | 2 | dts2cpp union type alias Array<Promise<string>> | Promise<string>[] 的解析结果与性能。 |
| 187 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0187` | 性能测试 | 2 | dts2cpp union type alias symbol | unique symbol | typeof Symbol.asyncIterator 的解析结果与性能。 |
| 188 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0188` | 性能测试 | 2 | dts2cpp union type alias 三成员 tagged object 联合 type A/B/C 的解析结果与性能。 |
| 189 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0189` | 性能测试 | 2 | dts2cpp union type alias 扩展 TypedArray 联合 的解析结果与性能。 |
| 190 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0190` | 性能测试 | 2 | dts2cpp union type alias never 特殊联合 [never] | never 的解析结果与性能。 |
| 191 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0191` | 性能测试 | 2 | dts2cpp union type alias Set<Map> | Map<Set> 嵌套联合 的解析结果与性能。 |
| 192 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0192` | 性能测试 | 2 | dts2cpp union type alias Omit/Pick 同接口联合 的解析结果与性能。 |
| 193 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0193` | 性能测试 | 2 | dts2cpp union type alias keyof + 字面量联合 的解析结果与性能。 |
| 194 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0194` | 性能测试 | 2 | dts2cpp union type alias TemplateStringsArray | readonly string[] 的解析结果与性能。 |
| 195 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0195` | 性能测试 | 2 | dts2cpp union type alias HeadersInit | Record<string, string> 的解析结果与性能。 |
| 196 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0196` | 性能测试 | 2 | dts2cpp union type alias Blob | ArrayBuffer | string 的解析结果与性能。 |
| 197 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0197` | 性能测试 | 2 | dts2cpp union type alias Timer | number 的解析结果与性能。 |
| 198 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0198` | 性能测试 | 2 | dts2cpp union type alias Parameters 含可选/union 入参 的解析结果与性能。 |
| 199 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0199` | 性能测试 | 2 | dts2cpp union type alias ReturnType 结果为 union 的解析结果与性能。 |
| 200 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0200` | 性能测试 | 2 | dts2cpp union type alias Awaited 嵌套 Promise union | null 的解析结果与性能。 |
| 201 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0201` | 性能测试 | 2 | dts2cpp union type alias mapped as 模板 key 联合 的解析结果与性能。 |
| 202 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0202` | 性能测试 | 2 | dts2cpp union type alias readonly tuple 两种写法联合 的解析结果与性能。 |
| 203 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0203` | 性能测试 | 2 | dts2cpp union type alias Map<readonly string[], number> | Map<string[], number> 的解析结果与性能。 |
| 204 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0204` | 性能测试 | 2 | dts2cpp union type alias 四成员 HTTP method 字面量联合 的解析结果与性能。 |
| 205 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0205` | 性能测试 | 2 | dts2cpp union type alias 深浅嵌套 union 括号组合 的解析结果与性能。 |
| 206 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0206` | 性能测试 | 2 | dts2cpp union type alias 双泛型 alias 组合联合 的解析结果与性能。 |
| 207 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0207` | 性能测试 | 2 | dts2cpp union type alias interface 方法签名返回 union 的解析结果与性能。 |
| 208 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0208` | 性能测试 | 2 | dts2cpp union type alias class 实例 | 字面量 联合 的解析结果与性能。 |
| 209 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0209` | 性能测试 | 2 | dts2cpp union type alias enum 成员 | 数字字面量 联合 的解析结果与性能。 |
| 210 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0210` | 性能测试 | 2 | dts2cpp union type alias 同文件多 union 批量（T1/T2/T3）的解析结果与性能。 |
| 211 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0211` | 性能测试 | 2 | dts2cpp union type alias 对齐 parsetsunion test_3：字符串字面量联合。 |
| 212 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0212` | 性能测试 | 2 | dts2cpp union type alias 对齐 parsetsunion test_4：数字字面量联合。 |
| 213 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0213` | 性能测试 | 2 | dts2cpp union type alias 十六进制字面量联合。 |
| 214 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0214` | 性能测试 | 2 | dts2cpp union type alias 二进制字面量联合。 |
| 215 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0215` | 性能测试 | 2 | dts2cpp union type alias 八进制字面量联合。 |
| 216 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0216` | 性能测试 | 2 | dts2cpp union type alias 科学计数法字面量联合。 |
| 217 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0217` | 性能测试 | 2 | dts2cpp union type alias 负浮点字面量联合。 |
| 218 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0218` | 性能测试 | 2 | dts2cpp union type alias bigint 字面量联合。 |
| 219 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0219` | 性能测试 | 2 | dts2cpp union type alias 十进制/十六进制/二进制混合字面量联合。 |
| 220 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0220` | 性能测试 | 2 | dts2cpp union type alias 负整数等差数列联合。 |
| 221 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0221` | 性能测试 | 2 | dts2cpp union type alias 浮点字面量联合。 |
| 222 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0222` | 性能测试 | 2 | dts2cpp union type alias bigint 与 number 字面量混联。 |
| 223 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0223` | 性能测试 | 2 | dts2cpp union type alias 负零字面量联合。 |
| 224 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0224` | 性能测试 | 2 | dts2cpp union type alias 空字符串字面量联合。 |
| 225 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0225` | 性能测试 | 2 | dts2cpp union type alias 长短字符串字面量联合。 |
| 226 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0226` | 性能测试 | 2 | dts2cpp union type alias 含转义字符的字符串字面量联合。 |
| 227 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0227` | 性能测试 | 2 | dts2cpp union type alias 含特殊字符的字符串字面量联合。 |
| 228 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0228` | 性能测试 | 2 | dts2cpp union type alias 单引号字符串字面量联合。 |
| 229 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0229` | 性能测试 | 2 | dts2cpp union type alias 字符串/数字/bigint/布尔/可空字面量八元混合联合。 |
| 230 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0230` | 性能测试 | 2 | dts2cpp union type alias 双占位符模板字面量联合。 |
| 231 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0231` | 性能测试 | 2 | dts2cpp union type alias 多占位符模板字面量联合。 |
| 232 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0232` | 性能测试 | 2 | dts2cpp union type alias CSS 单位模板字面量联合。 |
| 233 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0233` | 性能测试 | 2 | dts2cpp union type alias 模板字面量内嵌工具类型联合。 |
| 234 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0234` | 性能测试 | 2 | dts2cpp union type alias 十成员数字字面量联合。 |
| 235 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0235` | 性能测试 | 2 | dts2cpp union type alias 十成员基本类型联合。 |
| 236 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0236` | 性能测试 | 2 | dts2cpp union type alias 十二成员 mega 基本类型联合。 |
| 237 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0237` | 性能测试 | 2 | dts2cpp union type alias 多行书写三成员联合。 |
| 238 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0238` | 性能测试 | 2 | dts2cpp union type alias 多行书写五成员联合。 |
| 239 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0239` | 性能测试 | 2 | dts2cpp union type alias 重复成员联合。 |
| 240 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0240` | 性能测试 | 2 | dts2cpp union type alias 单成员括号包裹联合。 |
| 241 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0241` | 性能测试 | 2 | dts2cpp union type alias 两层括号嵌套联合。 |
| 242 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0242` | 性能测试 | 2 | dts2cpp union type alias 深括号嵌套联合。 |
| 243 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0243` | 性能测试 | 2 | dts2cpp union type alias 二维数组联合。 |
| 244 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0244` | 性能测试 | 2 | dts2cpp union type alias 嵌套泛型数组联合。 |
| 245 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0245` | 性能测试 | 2 | dts2cpp union type alias 联合元素二维数组联合。 |
| 246 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0246` | 性能测试 | 2 | dts2cpp union type alias 命名元素 tuple 联合。 |
| 247 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0247` | 性能测试 | 2 | dts2cpp union type alias 前置 rest tuple 联合。 |
| 248 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0248` | 性能测试 | 2 | dts2cpp union type alias 中置 rest tuple 联合。 |
| 249 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0249` | 性能测试 | 2 | dts2cpp union type alias 可选元素 tuple 联合。 |
| 250 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0250` | 性能测试 | 2 | dts2cpp union type alias readonly tuple 联合。 |
| 251 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0251` | 性能测试 | 2 | dts2cpp union type alias readonly 命名 tuple 联合。 |
| 252 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0252` | 性能测试 | 2 | dts2cpp union type alias readonly 数组两种写法联合。 |
| 253 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0253` | 性能测试 | 2 | dts2cpp union type alias 三元素 readonly tuple 联合。 |
| 254 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0254` | 性能测试 | 2 | dts2cpp union type alias 三元素 tuple 双向排列联合。 |
| 255 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0255` | 性能测试 | 2 | dts2cpp union type alias 嵌套 Map 联合。 |
| 256 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0256` | 性能测试 | 2 | dts2cpp union type alias Record 联合字面量 key 联合。 |
| 257 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0257` | 性能测试 | 2 | dts2cpp union type alias Record 联合 value 联合。 |
| 258 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0258` | 性能测试 | 2 | dts2cpp union type alias ReadonlyMap/ReadonlySet 嵌套联合。 |
| 259 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0259` | 性能测试 | 2 | dts2cpp union type alias 嵌套 Set 联合。 |
| 260 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0260` | 性能测试 | 2 | dts2cpp union type alias WeakSet 变体联合。 |
| 261 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0261` | 性能测试 | 2 | dts2cpp union type alias 可选参函数类型联合。 |
| 262 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0262` | 性能测试 | 2 | dts2cpp union type alias rest 参函数类型联合。 |
| 263 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0263` | 性能测试 | 2 | dts2cpp union type alias rest 参内含 union 的函数类型联合。 |
| 264 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0264` | 性能测试 | 2 | dts2cpp union type alias 泛型箭头函数类型联合。 |
| 265 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0265` | 性能测试 | 2 | dts2cpp union type alias Promise 返回函数类型联合。 |
| 266 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0266` | 性能测试 | 2 | dts2cpp union type alias 回调风格 union 入参函数类型联合。 |
| 267 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0267` | 性能测试 | 2 | dts2cpp union type alias 双泛型箭头函数类型联合。 |
| 268 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0268` | 性能测试 | 2 | dts2cpp union type alias rest 参布尔返回函数类型联合。 |
| 269 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0269` | 性能测试 | 2 | dts2cpp union type alias 入参返回均含 union 的函数类型联合。 |
| 270 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0270` | 性能测试 | 2 | dts2cpp union type alias 基本函数类型联合。 |
| 271 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0271` | 性能测试 | 2 | dts2cpp union type alias 双 void 函数类型联合。 |
| 272 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0272` | 性能测试 | 2 | dts2cpp union type alias async 箭头函数类型联合（成员不可拆分，断言 types 为空）。 |
| 273 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0273` | 性能测试 | 2 | dts2cpp union type alias 无括号函数类型混 union（成员不可拆分，断言 types 为空）。 |
| 274 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0274` | 性能测试 | 2 | dts2cpp union type alias Generator 返回函数类型联合。 |
| 275 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0275` | 性能测试 | 2 | dts2cpp union type alias Generator 入参函数类型联合。 |
| 276 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0276` | 性能测试 | 2 | dts2cpp union type alias 对象构造签名联合。 |
| 277 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0277` | 性能测试 | 2 | dts2cpp union type alias 对象 this 签名联合。 |
| 278 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0278` | 性能测试 | 2 | dts2cpp union type alias 对象调用签名联合。 |
| 279 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0279` | 性能测试 | 2 | dts2cpp union type alias 无参/有参调用签名联合。 |
| 280 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0280` | 性能测试 | 2 | dts2cpp union type alias 无括号构造签名混函数类型（成员不可拆分，断言 types 为空）。 |
| 281 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0281` | 性能测试 | 2 | dts2cpp union type alias 无括号 this 函数类型（成员不可拆分，断言 types 为空）。 |
| 282 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0282` | 性能测试 | 2 | dts2cpp union type alias NoInfer 工具类型联合。 |
| 283 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0283` | 性能测试 | 2 | dts2cpp union type alias OmitThisParameter 工具类型联合。 |
| 284 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0284` | 性能测试 | 2 | dts2cpp union type alias Awaited 嵌套 Promise 联合。 |
| 285 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0285` | 性能测试 | 2 | dts2cpp union type alias Readonly 工具类型联合。 |
| 286 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0286` | 性能测试 | 2 | dts2cpp union type alias 条件类型结果联合。 |
| 287 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0287` | 性能测试 | 2 | dts2cpp union type alias 索引访问 union 联合。 |
| 288 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0288` | 性能测试 | 2 | dts2cpp union type alias 映射类型联合。 |
| 289 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0289` | 性能测试 | 2 | dts2cpp union type alias keyof 映射类型联合。 |
| 290 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0290` | 性能测试 | 2 | dts2cpp union type alias keyof typeof 联合。 |
| 291 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0291` | 性能测试 | 2 | dts2cpp union type alias 可选属性对象联合。 |
| 292 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0292` | 性能测试 | 2 | dts2cpp union type alias readonly 属性对象联合。 |
| 293 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0293` | 性能测试 | 2 | dts2cpp union type alias 方法签名对象联合。 |
| 294 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0294` | 性能测试 | 2 | dts2cpp union type alias 嵌套对象联合。 |
| 295 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0295` | 性能测试 | 2 | dts2cpp union type alias 属性含 union 的对象联合。 |
| 296 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0296` | 性能测试 | 2 | dts2cpp union type alias 交叉类型与 union 混用联合。 |
| 297 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0297` | 性能测试 | 2 | dts2cpp union type alias typeof 变量联合。 |
| 298 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0298` | 性能测试 | 2 | dts2cpp union type alias typeof 函数联合。 |
| 299 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0299` | 性能测试 | 2 | dts2cpp union type alias 错误类型链联合。 |
| 300 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0300` | 性能测试 | 2 | dts2cpp union type alias DOM 元素类型联合。 |
| 301 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0301` | 性能测试 | 2 | dts2cpp union type alias 包装类型联合。 |
| 302 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0302` | 性能测试 | 2 | dts2cpp union type alias 命名空间引用联合。 |
| 303 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0303` | 性能测试 | 2 | dts2cpp union type alias Promise 链联合。 |
| 304 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0304` | 性能测试 | 2 | dts2cpp union type alias Promise<void> 与 void 联合。 |
| 305 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0305` | 性能测试 | 2 | dts2cpp union type alias 数字 key 的 Map/Record 联合。 |
| 306 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0306` | 性能测试 | 2 | dts2cpp union type alias 嵌套 ReadonlyArray 联合。 |
| 307 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0307` | 性能测试 | 2 | dts2cpp union type alias 三层嵌套容器联合。 |
| 308 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0308` | 性能测试 | 2 | dts2cpp union type alias Record 值嵌套容器联合。 |
| 309 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0309` | 性能测试 | 2 | dts2cpp union type alias Set/Map/Record 三容器联合。 |
| 310 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0310` | 性能测试 | 2 | dts2cpp union type alias unique symbol 联合。 |
| 311 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0311` | 性能测试 | 2 | dts2cpp union type alias 接口引用联合。 |
| 312 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0312` | 性能测试 | 2 | dts2cpp union type alias keyof 接口联合。 |
| 313 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0313` | 性能测试 | 2 | dts2cpp union type alias 接口索引访问联合。 |
| 314 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0314` | 性能测试 | 2 | dts2cpp union type alias enum 引用联合（同时校验 ParseObj.enums）。 |
| 315 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0315` | 性能测试 | 2 | dts2cpp union type alias enum 成员联合（同时校验 ParseObj.enums）。 |
| 316 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0316` | 性能测试 | 2 | dts2cpp union type alias 泛型 Box alias 联合。 |
| 317 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0317` | 性能测试 | 2 | dts2cpp union type alias 双泛型 Pair alias 联合。 |
| 318 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0318` | 性能测试 | 2 | dts2cpp union type alias 泛型参数联合。 |
| 319 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0319` | 性能测试 | 2 | dts2cpp union type alias 构造签名 alias 引用联合（同文件 2 个 alias）。 |
| 320 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0320` | 性能测试 | 2 | dts2cpp union type alias 十成员容器 mega union。 |
| 321 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0321` | 性能测试 | 2 | dts2cpp union type alias 同文件 5 个 union 批量解析。 |
| 322 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0322` | 性能测试 | 2 | dts2cpp union type alias 同文件 10 个 union 批量解析。 |
| 323 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0323` | 性能测试 | 2 | dts2cpp union type alias 同文件 20 个 union 批量解析。 |
| 324 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0324` | 性能测试 | 2 | dts2cpp union type alias 容错：空成员联合（对齐 parsetsunion test_31）。 |
| 325 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0325` | 性能测试 | 2 | dts2cpp union type alias 容错：数组缺右括号联合（对齐 parsetsunion test_32）。 |
| 326 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0326` | 性能测试 | 2 | dts2cpp union type alias 容错：字符串缺右引号联合（对齐 parsetsunion test_33）。 |
| 327 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0327` | 性能测试 | 2 | dts2cpp union type alias 容错：数字拼接联合（对齐 parsetsunion test_34）。 |
| 328 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0328` | 性能测试 | 2 | dts2cpp union type alias 容错：拼写错误 null 联合（对齐 parsetsunion test_36）。 |
| 329 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0329` | 性能测试 | 2 | dts2cpp union type alias 容错：拼写错误 undefined 联合（对齐 parsetsunion test_37）。 |
| 330 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0330` | 性能测试 | 2 | dts2cpp union type alias 容错：拼写错误 boolean 联合（对齐 parsetsunion test_39）。 |
| 331 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0331` | 性能测试 | 2 | dts2cpp union type alias 容错：拼写错误 any 联合（对齐 parsetsunion test_40）。 |
| 332 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0332` | 性能测试 | 2 | dts2cpp union type alias 容错：Awaited 空泛参（对齐 parsetsunion test_43，成员不可拆分）。 |
| 333 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0333` | 性能测试 | 2 | dts2cpp union type alias 容错：Pick 缺逗号（对齐 parsetsunion test_44，成员不可拆分）。 |
| 334 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0334` | 性能测试 | 2 | dts2cpp union type alias 容错：Omit 缺逗号（对齐 parsetsunion test_45，成员不可拆分）。 |
| 335 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0335` | 性能测试 | 2 | dts2cpp union type alias 开关字面量联合。 |
| 336 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0336` | 性能测试 | 2 | dts2cpp union type alias 颜色字面量联合。 |
| 337 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0337` | 性能测试 | 2 | dts2cpp union type alias 三成员对象联合。 |
| 338 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0338` | 性能测试 | 2 | dts2cpp union type alias Promise 泛参内含 union 联合。 |
| 339 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0339` | 性能测试 | 2 | dts2cpp union type alias Array/Set 泛参内含 union 联合。 |
| 340 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0340` | 性能测试 | 2 | dts2cpp union type alias Map 值内含四元 union 联合。 |
| 341 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0341` | 性能测试 | 2 | dts2cpp union type alias Promise 嵌套 Set/Map 联合。 |
| 342 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0342` | 性能测试 | 2 | dts2cpp union type alias Map/Record 值嵌套 Promise 联合。 |
| 343 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0343` | 性能测试 | 2 | dts2cpp union type alias tuple 数组两种写法联合。 |
| 344 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0344` | 性能测试 | 2 | dts2cpp union type alias 无占位符模板字面量联合。 |
| 345 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0345` | 性能测试 | 2 | dts2cpp union type alias 单占位符模板字面量联合。 |
| 346 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0346` | 性能测试 | 2 | dts2cpp union type alias 前缀模板字面量联合。 |
| 347 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0347` | 性能测试 | 2 | dts2cpp union type alias 三占位符模板字面量联合。 |
| 348 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0348` | 性能测试 | 2 | dts2cpp union type alias WeakMap 变体联合。 |
| 349 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0349` | 性能测试 | 2 | dts2cpp union type alias ReadonlySet 变体联合。 |
| 350 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0350` | 性能测试 | 2 | dts2cpp union type alias any/unknown 联合。 |
| 351 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0351` | 性能测试 | 2 | dts2cpp union type alias void/never 联合。 |
| 352 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0352` | 性能测试 | 2 | dts2cpp union type alias readonly tuple 与普通 tuple 联合。 |
| 353 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0353` | 性能测试 | 2 | dts2cpp union type alias Array 泛参 union 变体联合。 |
| 354 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0354` | 性能测试 | 2 | dts2cpp union type alias symbol/string 联合。 |
| 355 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0355` | 性能测试 | 2 | dts2cpp union type alias object/null 联合。 |
| 356 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0356` | 性能测试 | 2 | dts2cpp union type alias 入参不同返回 void 的函数类型联合。 |
| 357 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0357` | 性能测试 | 2 | dts2cpp union type alias 四元基本类型联合。 |
| 358 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0358` | 性能测试 | 2 | dts2cpp union type alias 三成员 Array 泛型联合。 |
| 359 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0359` | 性能测试 | 2 | dts2cpp union type alias 三成员单元素 tuple 联合。 |
| 360 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0360` | 性能测试 | 2 | dts2cpp union type alias 尺寸字面量联合。 |
| 361 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0361` | 性能测试 | 2 | dts2cpp union type alias 数字分隔符十进制字面量联合。 |
| 362 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0362` | 性能测试 | 2 | dts2cpp union type alias 数字分隔符二进制字面量联合。 |
| 363 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0363` | 性能测试 | 2 | dts2cpp union type alias 数字分隔符十六进制字面量联合。 |
| 364 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0364` | 性能测试 | 2 | dts2cpp union type alias 逐位分隔整数字面量联合。 |
| 365 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0365` | 性能测试 | 2 | dts2cpp union type alias 正号指数字面量联合。 |
| 366 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0366` | 性能测试 | 2 | dts2cpp union type alias 负/正指数阶梯字面量联合。 |
| 367 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0367` | 性能测试 | 2 | dts2cpp union type alias 负指数小数字面量联合。 |
| 368 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0368` | 性能测试 | 2 | dts2cpp union type alias 负 bigint 字面量联合。 |
| 369 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0369` | 性能测试 | 2 | dts2cpp union type alias bigint 阶梯字面量联合（含 0n）。 |
| 370 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0370` | 性能测试 | 2 | dts2cpp union type alias 大整数 bigint 字面量联合。 |
| 371 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0371` | 性能测试 | 2 | dts2cpp union type alias 十六进制大小写混写字面量联合。 |
| 372 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0372` | 性能测试 | 2 | dts2cpp union type alias 十六进制 2 的幂字面量联合。 |
| 373 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0373` | 性能测试 | 2 | dts2cpp union type alias 二进制 2 的幂字面量联合。 |
| 374 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0374` | 性能测试 | 2 | dts2cpp union type alias 八进制 2 的幂字面量联合。 |
| 375 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0375` | 性能测试 | 2 | dts2cpp union type alias 十六进制对数字面量联合。 |
| 376 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0376` | 性能测试 | 2 | dts2cpp union type alias 二进制交替模式字面量联合。 |
| 377 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0377` | 性能测试 | 2 | dts2cpp union type alias 八进制极值字面量联合。 |
| 378 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0378` | 性能测试 | 2 | dts2cpp union type alias 十成员奇数序列字面量联合。 |
| 379 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0379` | 性能测试 | 2 | dts2cpp union type alias 偶数序列字面量联合。 |
| 380 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0380` | 性能测试 | 2 | dts2cpp union type alias 3 倍数序列字面量联合。 |
| 381 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0381` | 性能测试 | 2 | dts2cpp union type alias 字节范围字面量联合。 |
| 382 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0382` | 性能测试 | 2 | dts2cpp union type alias 百位步进字面量联合。 |
| 383 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0383` | 性能测试 | 2 | dts2cpp union type alias 十一成员 2 的幂字面量联合。 |
| 384 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0384` | 性能测试 | 2 | dts2cpp union type alias 四分之一步进字面量联合。 |
| 385 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0385` | 性能测试 | 2 | dts2cpp union type alias 循环小数位字面量联合。 |
| 386 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0386` | 性能测试 | 2 | dts2cpp union type alias 带小数点零值字面量联合。 |
| 387 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0387` | 性能测试 | 2 | dts2cpp union type alias 浮点精度边界字面量联合。 |
| 388 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0388` | 性能测试 | 2 | dts2cpp union type alias 负偶步进字面量联合。 |
| 389 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0389` | 性能测试 | 2 | dts2cpp union type alias 20 位大整数字面量联合。 |
| 390 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0390` | 性能测试 | 2 | dts2cpp union type alias 十位步进字面量联合。 |
| 391 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0391` | 性能测试 | 2 | dts2cpp union type alias 低四位数字字面量联合。 |
| 392 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0392` | 性能测试 | 2 | dts2cpp union type alias 基本类型/数字/字符串混写字面量联合。 |
| 393 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0393` | 性能测试 | 2 | dts2cpp union type alias 真值语义字符串/数字混合联合。 |
| 394 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0394` | 性能测试 | 2 | dts2cpp union type alias 正负符号字面量联合。 |
| 395 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0395` | 性能测试 | 2 | dts2cpp union type alias 魔数十六进制字面量联合。 |
| 396 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0396` | 性能测试 | 2 | dts2cpp union type alias 双/单引号混写字符串字面量联合。 |
| 397 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0397` | 性能测试 | 2 | dts2cpp union type alias 含转义双引号/单引号的字符串字面量联合。 |
| 398 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0398` | 性能测试 | 2 | dts2cpp union type alias 含反斜杠转义的字符串字面量联合。 |
| 399 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0399` | 性能测试 | 2 | dts2cpp union type alias 仅含转义控制符的字符串字面量联合。 |
| 400 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0400` | 性能测试 | 2 | dts2cpp union type alias 含 unicode 转义的字符串字面量联合。 |
| 401 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0401` | 性能测试 | 2 | dts2cpp union type alias unicode 转义与字面等价字符串联合。 |
| 402 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0402` | 性能测试 | 2 | dts2cpp union type alias 数字字符串字面量联合。 |
| 403 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0403` | 性能测试 | 2 | dts2cpp union type alias 布尔字符串字面量联合。 |
| 404 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0404` | 性能测试 | 2 | dts2cpp union type alias 单词/符号字符串字面量联合。 |
| 405 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0405` | 性能测试 | 2 | dts2cpp union type alias 七成员星期字面量联合。 |
| 406 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0406` | 性能测试 | 2 | dts2cpp union type alias 十二成员月份字面量联合。 |
| 407 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0407` | 性能测试 | 2 | dts2cpp union type alias 五成员 HTTP 方法字面量联合（非 CRUD 组）。 |
| 408 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0408` | 性能测试 | 2 | dts2cpp union type alias 五成员日志级别字面量联合。 |
| 409 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0409` | 性能测试 | 2 | dts2cpp union type alias 四成员方位字面量联合。 |
| 410 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0410` | 性能测试 | 2 | dts2cpp union type alias 四成员方向字面量联合。 |
| 411 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0411` | 性能测试 | 2 | dts2cpp union type alias 四成员季节字面量联合。 |
| 412 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0412` | 性能测试 | 2 | dts2cpp union type alias 四成员季度字面量联合。 |
| 413 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0413` | 性能测试 | 2 | dts2cpp union type alias 五成员尺寸档位字面量联合。 |
| 414 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0414` | 性能测试 | 2 | dts2cpp union type alias 三成员 Promise 状态字面量联合。 |
| 415 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0415` | 性能测试 | 2 | dts2cpp union type alias 排序方向字面量联合。 |
| 416 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0416` | 性能测试 | 2 | dts2cpp union type alias 主题模式字面量联合。 |
| 417 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0417` | 性能测试 | 2 | dts2cpp union type alias 三成员优先级字面量联合。 |
| 418 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0418` | 性能测试 | 2 | dts2cpp union type alias 四成员数据格式字面量联合。 |
| 419 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0419` | 性能测试 | 2 | dts2cpp union type alias 嵌套模板字面量联合。 |
| 420 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0420` | 性能测试 | 2 | dts2cpp union type alias 占位符引用未定义别名联合。 |
| 421 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0421` | 性能测试 | 2 | dts2cpp union type alias 三占位符类型混用模板字面量联合。 |
| 422 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0422` | 性能测试 | 2 | dts2cpp union type alias 单占位符类型互换模板字面量联合。 |
| 423 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0423` | 性能测试 | 2 | dts2cpp union type alias 符号包裹模板字面量联合。 |
| 424 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0424` | 性能测试 | 2 | dts2cpp union type alias 双同型占位符模板字面量联合。 |
| 425 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0425` | 性能测试 | 2 | dts2cpp union type alias bigint 占位符模板字面量联合。 |
| 426 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0426` | 性能测试 | 2 | dts2cpp union type alias 三维数组联合。 |
| 427 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0427` | 性能测试 | 2 | dts2cpp union type alias 三层嵌套泛型数组联合。 |
| 428 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0428` | 性能测试 | 2 | dts2cpp union type alias 三层 ReadonlyArray 联合。 |
| 429 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0429` | 性能测试 | 2 | dts2cpp union type alias 泛参内含数组联合的数组联合。 |
| 430 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0430` | 性能测试 | 2 | dts2cpp union type alias 不同成员数联合元素数组联合。 |
| 431 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0431` | 性能测试 | 2 | dts2cpp union type alias Array<T>[] 与 T[][] 混写数组联合。 |
| 432 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0432` | 性能测试 | 2 | dts2cpp union type alias Promise 内嵌数组联合。 |
| 433 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0433` | 性能测试 | 2 | dts2cpp union type alias readonly 二维数组联合。 |
| 434 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0434` | 性能测试 | 2 | dts2cpp union type alias 三成员无符号 TypedArray 联合。 |
| 435 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0435` | 性能测试 | 2 | dts2cpp union type alias BigInt TypedArray 联合。 |
| 436 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0436` | 性能测试 | 2 | dts2cpp union type alias 二进制缓冲区类型联合。 |
| 437 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0437` | 性能测试 | 2 | dts2cpp union type alias 四元/三元异序 tuple 联合。 |
| 438 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0438` | 性能测试 | 2 | dts2cpp union type alias readonly rest tuple 联合。 |
| 439 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0439` | 性能测试 | 2 | dts2cpp union type alias 命名 rest tuple 联合。 |
| 440 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0440` | 性能测试 | 2 | dts2cpp union type alias rest 用 Array<T> 写法的 tuple 联合。 |
| 441 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0441` | 性能测试 | 2 | dts2cpp union type alias 尾部 rest tuple 联合。 |
| 442 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0442` | 性能测试 | 2 | dts2cpp union type alias 函数类型元素 tuple 联合。 |
| 443 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0443` | 性能测试 | 2 | dts2cpp union type alias 容器元素 tuple 联合。 |
| 444 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0444` | 性能测试 | 2 | dts2cpp union type alias 嵌套 tuple 元素 tuple 联合。 |
| 445 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0445` | 性能测试 | 2 | dts2cpp union type alias 三层嵌套 tuple 数组联合。 |
| 446 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0446` | 性能测试 | 2 | dts2cpp union type alias tuple 中嵌 tuple 联合。 |
| 447 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0447` | 性能测试 | 2 | dts2cpp union type alias Set 元素为 tuple 联合。 |
| 448 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0448` | 性能测试 | 2 | dts2cpp union type alias Map 键为 tuple 联合。 |
| 449 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0449` | 性能测试 | 2 | dts2cpp union type alias 三成员数字单元素 tuple 联合。 |
| 450 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0450` | 性能测试 | 2 | dts2cpp union type alias 单元素 tuple 与数组联合。 |
| 451 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0451` | 性能测试 | 2 | dts2cpp union type alias 空 tuple 与单元素 tuple 联合。 |
| 452 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0452` | 性能测试 | 2 | dts2cpp union type alias readonly 空 tuple 联合。 |
| 453 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0453` | 性能测试 | 2 | dts2cpp union type alias 三层嵌套 Map 联合。 |
| 454 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0454` | 性能测试 | 2 | dts2cpp union type alias 嵌套 Record 联合。 |
| 455 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0455` | 性能测试 | 2 | dts2cpp union type alias 三层嵌套 Set 联合。 |
| 456 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0456` | 性能测试 | 2 | dts2cpp union type alias Map 泛参互换联合。 |
| 457 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0457` | 性能测试 | 2 | dts2cpp union type alias ReadonlyMap 泛参互换联合。 |
| 458 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0458` | 性能测试 | 2 | dts2cpp union type alias WeakMap 值内嵌数组联合。 |
| 459 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0459` | 性能测试 | 2 | dts2cpp union type alias Map 值内嵌 readonly tuple 联合。 |
| 460 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0460` | 性能测试 | 2 | dts2cpp union type alias Record/Map 值内嵌容器联合。 |
| 461 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0461` | 性能测试 | 2 | dts2cpp union type alias symbol 键 Map 联合。 |
| 462 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0462` | 性能测试 | 2 | dts2cpp union type alias 函数类型元素 WeakSet 联合。 |
| 463 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0463` | 性能测试 | 2 | dts2cpp union type alias Array<Promise<Set>> 三层容器联合。 |
| 464 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0464` | 性能测试 | 2 | dts2cpp union type alias Map/Record 值嵌套 Promise<Set> 联合。 |
| 465 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0465` | 性能测试 | 2 | dts2cpp union type alias Record 值内嵌函数类型联合。 |
| 466 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0466` | 性能测试 | 2 | dts2cpp union type alias 函数类型元素数组联合。 |
| 467 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0467` | 性能测试 | 2 | dts2cpp union type alias Promise 值内嵌函数类型联合。 |
| 468 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0468` | 性能测试 | 2 | dts2cpp union type alias Set 值内嵌函数类型联合。 |
| 469 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0469` | 性能测试 | 2 | dts2cpp union type alias 对象属性内嵌函数类型联合。 |
| 470 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0470` | 性能测试 | 2 | dts2cpp union type alias Error 与可空类型联合。 |
| 471 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0471` | 性能测试 | 2 | dts2cpp union type alias 四成员内置对象引用联合。 |
| 472 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0472` | 性能测试 | 2 | dts2cpp union type alias 四成员内置引用混 Function 联合。 |
| 473 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0473` | 性能测试 | 2 | dts2cpp union type alias keyof typeof 内置对象联合。 |
| 474 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0474` | 性能测试 | 2 | dts2cpp union type alias 内置对象方法索引访问联合。 |
| 475 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0475` | 性能测试 | 2 | dts2cpp union type alias 容错：前导空成员联合（仅 1 个成员）。 |
| 476 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0476` | 性能测试 | 2 | dts2cpp union type alias 容错：尾部空成员联合。 |
| 477 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0477` | 性能测试 | 2 | dts2cpp union type alias 三参函数类型联合。 |
| 478 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0478` | 性能测试 | 2 | dts2cpp union type alias 柯里化返回函数类型联合。 |
| 479 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0479` | 性能测试 | 2 | dts2cpp union type alias 泛型约束箭头函数类型联合。 |
| 480 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0480` | 性能测试 | 2 | dts2cpp union type alias 同入参不同返回函数类型联合。 |
| 481 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0481` | 性能测试 | 2 | dts2cpp union type alias 不同参数名/类型函数类型联合。 |
| 482 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0482` | 性能测试 | 2 | dts2cpp union type alias any/unknown rest 函数类型联合。 |
| 483 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0483` | 性能测试 | 2 | dts2cpp union type alias Promise<void>/Promise<never> 函数类型联合。 |
| 484 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0484` | 性能测试 | 2 | dts2cpp union type alias 可选回调参函数类型联合。 |
| 485 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0485` | 性能测试 | 2 | dts2cpp union type alias 带参对象构造签名联合。 |
| 486 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0486` | 性能测试 | 2 | dts2cpp union type alias 构造签名与调用签名混合对象联合。 |
| 487 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0487` | 性能测试 | 2 | dts2cpp union type alias 无括号可选参函数类型（成员不可拆分，断言 types 为空）。 |
| 488 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0488` | 性能测试 | 2 | dts2cpp union type alias 超集/子集对象联合。 |
| 489 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0489` | 性能测试 | 2 | dts2cpp union type alias 同键不同类型对象联合。 |
| 490 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0490` | 性能测试 | 2 | dts2cpp union type alias 四成员单键对象联合。 |
| 491 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0491` | 性能测试 | 2 | dts2cpp union type alias readonly 与普通属性混用对象联合。 |
| 492 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0492` | 性能测试 | 2 | dts2cpp union type alias 多可选属性对象联合。 |
| 493 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0493` | 性能测试 | 2 | dts2cpp union type alias 数字/字符串索引签名对象联合。 |
| 494 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0494` | 性能测试 | 2 | dts2cpp union type alias 索引签名值含 union 对象联合。 |
| 495 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0495` | 性能测试 | 2 | dts2cpp union type alias getter/setter 对象联合。 |
| 496 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0496` | 性能测试 | 2 | dts2cpp union type alias 重载调用签名对象联合。 |
| 497 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0497` | 性能测试 | 2 | dts2cpp union type alias 三层嵌套对象联合。 |
| 498 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0498` | 性能测试 | 2 | dts2cpp union type alias 属性为数组/Set 对象联合。 |
| 499 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0499` | 性能测试 | 2 | dts2cpp union type alias 属性为 Map/Record 对象联合。 |
| 500 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0500` | 性能测试 | 2 | dts2cpp union type alias Parameters 双参函数联合。 |
| 501 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0501` | 性能测试 | 2 | dts2cpp union type alias ReturnType 返回 union 联合。 |
| 502 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0502` | 性能测试 | 2 | dts2cpp union type alias Awaited 三层嵌套联合。 |
| 503 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0503` | 性能测试 | 2 | dts2cpp union type alias Pick 内嵌 Record 联合。 |
| 504 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0504` | 性能测试 | 2 | dts2cpp union type alias Omit 内嵌 Record 联合。 |
| 505 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0505` | 性能测试 | 2 | dts2cpp union type alias Partial 内联对象联合。 |
| 506 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0506` | 性能测试 | 2 | dts2cpp union type alias Required 内联对象联合。 |
| 507 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0507` | 性能测试 | 2 | dts2cpp union type alias Readonly 内联对象联合。 |
| 508 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0508` | 性能测试 | 2 | dts2cpp union type alias Record 同键不同值类型联合。 |
| 509 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0509` | 性能测试 | 2 | dts2cpp union type alias InstanceType 内置对象联合。 |
| 510 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0510` | 性能测试 | 2 | dts2cpp union type alias ConstructorParameters 内置对象联合。 |
| 511 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0511` | 性能测试 | 2 | dts2cpp union type alias OmitThisParameter void this 联合。 |
| 512 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0512` | 性能测试 | 2 | dts2cpp union type alias keyof 内联对象联合。 |
| 513 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0513` | 性能测试 | 2 | dts2cpp union type alias 双映射类型联合。 |
| 514 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0514` | 性能测试 | 2 | dts2cpp union type alias 泛型 keyof 映射类型联合。 |
| 515 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0515` | 性能测试 | 2 | dts2cpp union type alias 泛型索引访问联合。 |
| 516 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0516` | 性能测试 | 2 | dts2cpp union type alias 无泛型直接条件类型联合。 |
| 517 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0517` | 性能测试 | 2 | dts2cpp union type alias infer 条件类型联合。 |
| 518 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0518` | 性能测试 | 2 | dts2cpp union type alias 双泛型 keyof 联合。 |
| 519 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0519` | 性能测试 | 2 | dts2cpp union type alias typeof 成员访问联合。 |
| 520 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0520` | 性能测试 | 2 | dts2cpp union type alias typeof Symbol 联合。 |
| 521 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0521` | 性能测试 | 2 | dts2cpp union type alias Function/object/null 联合。 |
| 522 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0522` | 性能测试 | 2 | dts2cpp union type alias 类属性索引访问联合。 |
| 523 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0523` | 性能测试 | 2 | dts2cpp union type alias 包装类型/基本类型/字面量混联。 |
| 524 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0524` | 性能测试 | 2 | dts2cpp union type alias unknown/any 数组联合。 |
| 525 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0525` | 性能测试 | 2 | dts2cpp union type alias 双交叉类型联合。 |
| 526 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0526` | 性能测试 | 2 | dts2cpp union type alias this 类型联合。 |
| 527 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0527` | 性能测试 | 2 | dts2cpp union type alias 泛型 NoInfer 联合。 |
| 528 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0528` | 性能测试 | 2 | dts2cpp union type alias 交叉类型 alias 引用联合（同文件 3 个 alias）。 |
| 529 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0529` | 性能测试 | 2 | dts2cpp union type alias enum+interface+type 同文件组合联合（校验 ParseObj.enums）。 |
| 530 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0530` | 性能测试 | 2 | dts2cpp union type alias 同文件 30 个 union 批量解析。 |
| 531 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0531` | 性能测试 | 2 | dts2cpp union type alias 容错：括号不配对（成员不可拆分，断言 types 为空）。 |
| 532 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0532` | 性能测试 | 2 | dts2cpp union type alias 容错：双竖线（成员不可拆分，断言 types 为空）。 |
| 533 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0533` | 性能测试 | 2 | dts2cpp union type alias 容错：泛型括号不闭合（成员不可拆分，断言 types 为空）。 |
| 534 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0534` | 性能测试 | 2 | dts2cpp union type alias 容错：泛型括号不闭合（残留成员）。 |
| 535 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0001` | 性能测试 | 2 | dts2cpp enum 对齐 parsetsenum test_1：一般多行 enum（无赋值） 的解析结果与性能。 |
| 536 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0002` | 性能测试 | 2 | dts2cpp enum 对齐 test_2：成员带行注释 的解析结果与性能。 |
| 537 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0003` | 性能测试 | 2 | dts2cpp enum 对齐 test_3：起始成员赋值其余推导 的解析结果与性能。 |
| 538 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0004` | 性能测试 | 2 | dts2cpp enum 对齐 test_4：全部成员位运算赋值 的解析结果与性能。 |
| 539 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0005` | 性能测试 | 2 | dts2cpp enum 对齐 test_5：const enum 无赋值 的解析结果与性能。 |
| 540 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0006` | 性能测试 | 2 | dts2cpp enum 对齐 test_6：const enum 复杂表达式赋值 的解析结果与性能。 |
| 541 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0007` | 性能测试 | 2 | dts2cpp enum 对齐 test_7：const enum 字符串值与乘法赋值 的解析结果与性能。 |
| 542 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0008` | 性能测试 | 2 | dts2cpp enum 对齐 test_8：联合赋值 ALL = Up | Down 的解析结果与性能。 |
| 543 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0009` | 性能测试 | 2 | dts2cpp enum 对齐 test_12：单行 enum 带块注释 的解析结果与性能。 |
| 544 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0010` | 性能测试 | 2 | dts2cpp enum 对齐 test_14：单行 enum 位运算赋值 的解析结果与性能。 |
| 545 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0011` | 性能测试 | 2 | dts2cpp enum 对齐 test_15：单行 const enum 的解析结果与性能。 |
| 546 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0012` | 性能测试 | 2 | dts2cpp enum 对齐 test_16：单行 const enum 复杂表达式 的解析结果与性能。 |
| 547 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0013` | 性能测试 | 2 | dts2cpp enum 对齐 test_21：下划线命名 enum/成员 的解析结果与性能。 |
| 548 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0014` | 性能测试 | 2 | dts2cpp enum 对齐 test_22：export enum 的解析结果与性能。 |
| 549 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0015` | 性能测试 | 2 | dts2cpp enum 对齐 test_23：declare enum 的解析结果与性能。 |
| 550 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0016` | 性能测试 | 2 | dts2cpp enum 对齐 test_24：namespace 嵌套 export enum 的解析结果与性能。 |
| 551 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0017` | 性能测试 | 2 | dts2cpp enum 对齐 test_25：成员 as 别名（members 拆分为 as/West） 的解析结果与性能。 |
| 552 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0018` | 性能测试 | 2 | dts2cpp enum 对齐 test_26：装饰符赋值（values 为空串） 的解析结果与性能。 |
| 553 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0019` | 性能测试 | 2 | dts2cpp enum 对齐 test_27：下划线开头成员 的解析结果与性能。 |
| 554 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0020` | 性能测试 | 2 | dts2cpp enum 对齐 test_28：匿名 enum 的解析结果与性能。 |
| 555 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0021` | 性能测试 | 2 | dts2cpp enum 对齐 test_31：空成员 enum 的解析结果与性能。 |
| 556 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0022` | 性能测试 | 2 | dts2cpp enum 对齐 test_32：完全匿名空 enum 的解析结果与性能。 |
| 557 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0023` | 性能测试 | 2 | dts2cpp enum 对齐 test_33：同文件两个 enum 的解析结果与性能。 |
| 558 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0024` | 性能测试 | 2 | dts2cpp enum 对齐 test_34：整体注释掉的 enum（enums 为空） 的解析结果与性能。 |
| 559 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0025` | 性能测试 | 2 | dts2cpp enum 对齐 test_35：const enum 箭头函数赋值 的解析结果与性能。 |
| 560 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0026` | 性能测试 | 2 | dts2cpp enum 对齐 test_36：空赋值 Active = , 的解析结果与性能。 |
| 561 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0027` | 性能测试 | 2 | dts2cpp enum 对齐 test_37：不完整字符串赋值 的解析结果与性能。 |
| 562 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0028` | 性能测试 | 2 | dts2cpp enum 对齐 test_38：不完整联合赋值 的解析结果与性能。 |
| 563 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0029` | 性能测试 | 2 | dts2cpp enum 扩充：10 成员无值 enum 的解析结果与性能。 |
| 564 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0030` | 性能测试 | 2 | dts2cpp enum 扩充：20 成员无值 enum 的解析结果与性能。 |
| 565 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0031` | 性能测试 | 2 | dts2cpp enum 扩充：50 成员无值 enum（规模压测） 的解析结果与性能。 |
| 566 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0032` | 性能测试 | 2 | dts2cpp enum 扩充：10 成员全部数字赋值 的解析结果与性能。 |
| 567 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0033` | 性能测试 | 2 | dts2cpp enum 扩充：十六进制赋值 的解析结果与性能。 |
| 568 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0034` | 性能测试 | 2 | dts2cpp enum 扩充：二进制赋值 的解析结果与性能。 |
| 569 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0035` | 性能测试 | 2 | dts2cpp enum 扩充：八进制赋值 的解析结果与性能。 |
| 570 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0036` | 性能测试 | 2 | dts2cpp enum 扩充：负数赋值 的解析结果与性能。 |
| 571 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0037` | 性能测试 | 2 | dts2cpp enum 扩充：浮点赋值 的解析结果与性能。 |
| 572 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0038` | 性能测试 | 2 | dts2cpp enum 扩充：字符串字面量赋值 的解析结果与性能。 |
| 573 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0039` | 性能测试 | 2 | dts2cpp enum 扩充：模板字符串赋值 的解析结果与性能。 |
| 574 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0040` | 性能测试 | 2 | dts2cpp enum 扩充：数字/字符串/十六进制混合赋值 的解析结果与性能。 |
| 575 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0041` | 性能测试 | 2 | dts2cpp enum 扩充：11 种算术/位运算表达式赋值 的解析结果与性能。 |
| 576 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0042` | 性能测试 | 2 | dts2cpp enum 扩充：Flags 风格成员引用联合赋值 的解析结果与性能。 |
| 577 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0043` | 性能测试 | 2 | dts2cpp enum 扩充：成员引用后定义成员（前向引用） 的解析结果与性能。 |
| 578 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0044` | 性能测试 | 2 | dts2cpp enum 扩充：成员自引用赋值 的解析结果与性能。 |
| 579 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0045` | 性能测试 | 2 | dts2cpp enum 扩充：bigint 赋值 的解析结果与性能。 |
| 580 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0046` | 性能测试 | 2 | dts2cpp enum 扩充：同文件 3 个 enum 的解析结果与性能。 |
| 581 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0047` | 性能测试 | 2 | dts2cpp enum 扩充：同文件 5 个 enum（多声明吞吐） 的解析结果与性能。 |
| 582 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0048` | 性能测试 | 2 | dts2cpp enum 扩充：export const enum 组合 的解析结果与性能。 |
| 583 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0049` | 性能测试 | 2 | dts2cpp enum 扩充：declare const enum 组合 的解析结果与性能。 |
| 584 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0050` | 性能测试 | 2 | dts2cpp enum 扩充：namespace 内 2 个 enum 的解析结果与性能。 |
| 585 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0051` | 性能测试 | 2 | dts2cpp enum 扩充：中文 enum 名 的解析结果与性能。 |
| 586 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0052` | 性能测试 | 2 | dts2cpp enum 扩充：中文成员名 的解析结果与性能。 |
| 587 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0053` | 性能测试 | 2 | dts2cpp enum 扩充：尾逗号成员 的解析结果与性能。 |
| 588 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0054` | 性能测试 | 2 | dts2cpp enum 扩充：无尾分号 enum 的解析结果与性能。 |
| 589 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0055` | 性能测试 | 2 | dts2cpp enum 扩充：字符串/数字/位运算三态混合赋值 的解析结果与性能。 |
| 590 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0056` | 性能测试 | 2 | dts2cpp enum 扩充：单成员 enum 的解析结果与性能。 |
| 591 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0057` | 性能测试 | 2 | dts2cpp enum 扩充：部分空赋值容错 的解析结果与性能。 |
| 592 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0062` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：2 成员 enum（无赋值） 的解析结果与性能。 |
| 593 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0063` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：2 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 594 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0064` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：2 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 595 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0065` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：2 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 596 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0066` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：2 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 597 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0067` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：2 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 598 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0068` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：3 成员 enum（无赋值） 的解析结果与性能。 |
| 599 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0069` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：3 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 600 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0070` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：3 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 601 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0071` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：3 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 602 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0072` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：3 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 603 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0073` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：3 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 604 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0074` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：4 成员 enum（无赋值） 的解析结果与性能。 |
| 605 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0075` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：4 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 606 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0076` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：4 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 607 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0077` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：4 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 608 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0078` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：4 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 609 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0079` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：4 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 610 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0080` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：5 成员 enum（无赋值） 的解析结果与性能。 |
| 611 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0081` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：5 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 612 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0082` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：5 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 613 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0083` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：5 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 614 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0084` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：5 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 615 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0085` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：5 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 616 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0086` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：6 成员 enum（无赋值） 的解析结果与性能。 |
| 617 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0087` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：6 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 618 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0088` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：6 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 619 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0089` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：6 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 620 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0090` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：6 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 621 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0091` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：6 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 622 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0092` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：7 成员 enum（无赋值） 的解析结果与性能。 |
| 623 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0093` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：7 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 624 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0094` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：7 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 625 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0095` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：7 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 626 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0096` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：7 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 627 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0097` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：7 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 628 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0098` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：8 成员 enum（无赋值） 的解析结果与性能。 |
| 629 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0099` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：8 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 630 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0100` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：8 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 631 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0101` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：8 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 632 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0102` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：8 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 633 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0103` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：8 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 634 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0104` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：9 成员 enum（无赋值） 的解析结果与性能。 |
| 635 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0105` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：9 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 636 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0106` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：9 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 637 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0107` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：9 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 638 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0108` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：9 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 639 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0109` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：9 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 640 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0110` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：10 成员 enum（无赋值） 的解析结果与性能。 |
| 641 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0111` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：10 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 642 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0112` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：10 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 643 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0113` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：10 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 644 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0114` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：10 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 645 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0115` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：10 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 646 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0116` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：11 成员 enum（无赋值） 的解析结果与性能。 |
| 647 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0117` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：11 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 648 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0118` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：11 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 649 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0119` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：11 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 650 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0120` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：11 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 651 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0121` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：11 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 652 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0122` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：12 成员 enum（无赋值） 的解析结果与性能。 |
| 653 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0123` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：12 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 654 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0124` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：12 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 655 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0125` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：12 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 656 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0126` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：12 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 657 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0127` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：12 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 658 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0128` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：13 成员 enum（无赋值） 的解析结果与性能。 |
| 659 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0129` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：13 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 660 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0130` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：13 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 661 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0131` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：13 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 662 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0132` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：13 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 663 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0133` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：13 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 664 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0134` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：14 成员 enum（无赋值） 的解析结果与性能。 |
| 665 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0135` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：14 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 666 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0136` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：14 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 667 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0137` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：14 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 668 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0138` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：14 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 669 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0139` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：14 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 670 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0140` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：15 成员 enum（无赋值） 的解析结果与性能。 |
| 671 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0141` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：15 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 672 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0142` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：15 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 673 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0143` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：15 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 674 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0144` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：15 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 675 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0145` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：15 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 676 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0146` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：16 成员 enum（无赋值） 的解析结果与性能。 |
| 677 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0147` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：16 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 678 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0148` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：16 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 679 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0149` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：16 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 680 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0150` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：16 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 681 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0151` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：16 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 682 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0152` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：17 成员 enum（无赋值） 的解析结果与性能。 |
| 683 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0153` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：17 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 684 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0154` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：17 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 685 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0155` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：17 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 686 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0156` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：17 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 687 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0157` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：17 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 688 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0158` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：18 成员 enum（无赋值） 的解析结果与性能。 |
| 689 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0159` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：18 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 690 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0160` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：18 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 691 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0161` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：18 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 692 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0162` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：18 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 693 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0163` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：18 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 694 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0164` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：19 成员 enum（无赋值） 的解析结果与性能。 |
| 695 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0165` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：19 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 696 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0166` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：19 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 697 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0167` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：19 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 698 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0168` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：19 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 699 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0169` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：19 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 700 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0170` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：20 成员 enum（无赋值） 的解析结果与性能。 |
| 701 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0171` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：20 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 702 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0172` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：20 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 703 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0173` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：20 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 704 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0174` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：20 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 705 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0175` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：20 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 706 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0176` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：21 成员 enum（无赋值） 的解析结果与性能。 |
| 707 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0177` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：21 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 708 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0178` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：21 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 709 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0179` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：21 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 710 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0180` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：21 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 711 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0181` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：21 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 712 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0182` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：22 成员 enum（无赋值） 的解析结果与性能。 |
| 713 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0183` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：22 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 714 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0184` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：22 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 715 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0185` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：22 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 716 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0186` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：22 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 717 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0187` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：22 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 718 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0188` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：23 成员 enum（无赋值） 的解析结果与性能。 |
| 719 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0189` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：23 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 720 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0190` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：23 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 721 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0191` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：23 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 722 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0192` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：23 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 723 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0193` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：23 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 724 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0194` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：24 成员 enum（无赋值） 的解析结果与性能。 |
| 725 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0195` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：24 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 726 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0196` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：24 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 727 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0197` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：24 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 728 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0198` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：24 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 729 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0199` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：24 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 730 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0200` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：25 成员 enum（无赋值） 的解析结果与性能。 |
| 731 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0201` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：25 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 732 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0202` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：25 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 733 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0203` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：25 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 734 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0204` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：25 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 735 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0205` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：25 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 736 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0206` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：26 成员 enum（无赋值） 的解析结果与性能。 |
| 737 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0207` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：26 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 738 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0208` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：26 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 739 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0209` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：26 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 740 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0210` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：26 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 741 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0211` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：26 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 742 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0212` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：27 成员 enum（无赋值） 的解析结果与性能。 |
| 743 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0213` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：27 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 744 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0214` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：27 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 745 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0215` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：27 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 746 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0216` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：27 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 747 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0217` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：27 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 748 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0218` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：28 成员 enum（无赋值） 的解析结果与性能。 |
| 749 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0219` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：28 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 750 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0220` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：28 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 751 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0221` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：28 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 752 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0222` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：28 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 753 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0223` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：28 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 754 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0224` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：29 成员 enum（无赋值） 的解析结果与性能。 |
| 755 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0225` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：29 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 756 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0226` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：29 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 757 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0227` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：29 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 758 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0228` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：29 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 759 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0229` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：29 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 760 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0230` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：30 成员 enum（无赋值） 的解析结果与性能。 |
| 761 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0231` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：30 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 762 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0232` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：30 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 763 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0233` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：30 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 764 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0234` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：30 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 765 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0235` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：30 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 766 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0236` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：31 成员 enum（无赋值） 的解析结果与性能。 |
| 767 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0237` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：31 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 768 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0238` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：31 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 769 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0239` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：31 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 770 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0240` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：31 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 771 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0241` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：31 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 772 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0242` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：32 成员 enum（无赋值） 的解析结果与性能。 |
| 773 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0243` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：32 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 774 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0244` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：32 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 775 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0245` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：32 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 776 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0246` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：32 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 777 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0247` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：32 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 778 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0248` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：33 成员 enum（无赋值） 的解析结果与性能。 |
| 779 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0249` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：33 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 780 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0250` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：33 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 781 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0251` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：33 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 782 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0252` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：33 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 783 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0253` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：33 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 784 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0254` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：34 成员 enum（无赋值） 的解析结果与性能。 |
| 785 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0255` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：34 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 786 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0256` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：34 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 787 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0257` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：34 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 788 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0258` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：34 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 789 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0259` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：34 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 790 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0260` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：35 成员 enum（无赋值） 的解析结果与性能。 |
| 791 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0261` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：35 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 792 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0262` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：35 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 793 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0263` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：35 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 794 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0264` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：35 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 795 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0265` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：35 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 796 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0266` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：36 成员 enum（无赋值） 的解析结果与性能。 |
| 797 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0267` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：36 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 798 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0268` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：36 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 799 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0269` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：36 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 800 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0270` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：36 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 801 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0271` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：36 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 802 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0272` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：37 成员 enum（无赋值） 的解析结果与性能。 |
| 803 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0273` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：37 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 804 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0274` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：37 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 805 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0275` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：37 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 806 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0276` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：37 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 807 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0277` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：37 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 808 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0278` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：38 成员 enum（无赋值） 的解析结果与性能。 |
| 809 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0279` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：38 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 810 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0280` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：38 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 811 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0281` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：38 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 812 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0282` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：38 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 813 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0283` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：38 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 814 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0284` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：39 成员 enum（无赋值） 的解析结果与性能。 |
| 815 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0285` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：39 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 816 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0286` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：39 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 817 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0287` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：39 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 818 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0288` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：39 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 819 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0289` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：39 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 820 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0290` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：40 成员 enum（无赋值） 的解析结果与性能。 |
| 821 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0291` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：40 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 822 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0292` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：40 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 823 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0293` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：40 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 824 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0294` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：40 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 825 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0295` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：40 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 826 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0296` | 性能测试 | 2 | dts2cpp enum 扩充-命名：UpperCamel 的解析结果与性能。 |
| 827 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0297` | 性能测试 | 2 | dts2cpp enum 扩充-命名：lowerCamel 的解析结果与性能。 |
| 828 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0298` | 性能测试 | 2 | dts2cpp enum 扩充-命名：snake_case 的解析结果与性能。 |
| 829 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0299` | 性能测试 | 2 | dts2cpp enum 扩充-命名：TRAILING_DIGITS2 的解析结果与性能。 |
| 830 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0300` | 性能测试 | 2 | dts2cpp enum 扩充-命名：leading_underscore 的解析结果与性能。 |
| 831 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0301` | 性能测试 | 2 | dts2cpp enum 扩充-命名：Double__Under 的解析结果与性能。 |
| 832 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0302` | 性能测试 | 2 | dts2cpp enum 扩充-命名：ClassName 的解析结果与性能。 |
| 833 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0303` | 性能测试 | 2 | dts2cpp enum 扩充-命名：E 的解析结果与性能。 |
| 834 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0304` | 性能测试 | 2 | dts2cpp enum 扩充-命名：E1 的解析结果与性能。 |
| 835 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0305` | 性能测试 | 2 | dts2cpp enum 扩充-命名：e1 的解析结果与性能。 |
| 836 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0306` | 性能测试 | 2 | dts2cpp enum 扩充-命名：EN 的解析结果与性能。 |
| 837 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0307` | 性能测试 | 2 | dts2cpp enum 扩充-命名：en 的解析结果与性能。 |
| 838 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0308` | 性能测试 | 2 | dts2cpp enum 扩充-命名：Enum 的解析结果与性能。 |
| 839 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0309` | 性能测试 | 2 | dts2cpp enum 扩充-命名：enum1 的解析结果与性能。 |
| 840 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0310` | 性能测试 | 2 | dts2cpp enum 扩充-命名：Enum123 的解析结果与性能。 |
| 841 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0311` | 性能测试 | 2 | dts2cpp enum 扩充-命名：状态码 的解析结果与性能。 |
| 842 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0312` | 性能测试 | 2 | dts2cpp enum 扩充-命名：状态码2 的解析结果与性能。 |
| 843 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0313` | 性能测试 | 2 | dts2cpp enum 扩充-命名：_internal 的解析结果与性能。 |
| 844 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0314` | 性能测试 | 2 | dts2cpp enum 扩充-命名：VersionV2 的解析结果与性能。 |
| 845 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0315` | 性能测试 | 2 | dts2cpp enum 扩充-命名：HTTPStatus 的解析结果与性能。 |
| 846 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0316` | 性能测试 | 2 | dts2cpp enum 扩充-多声明：同文件 2 个 enum 的解析结果与性能。 |
| 847 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0317` | 性能测试 | 2 | dts2cpp enum 扩充-多声明：同文件 3 个 enum 的解析结果与性能。 |
| 848 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0318` | 性能测试 | 2 | dts2cpp enum 扩充-多声明：同文件 4 个 enum 的解析结果与性能。 |
| 849 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0319` | 性能测试 | 2 | dts2cpp enum 扩充-多声明：同文件 5 个 enum 的解析结果与性能。 |
| 850 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0320` | 性能测试 | 2 | dts2cpp enum 扩充-多声明：同文件 6 个 enum 的解析结果与性能。 |
| 851 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0321` | 性能测试 | 2 | dts2cpp enum 扩充-多声明：同文件 7 个 enum 的解析结果与性能。 |
| 852 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0322` | 性能测试 | 2 | dts2cpp enum 扩充-多声明：同文件 8 个 enum 的解析结果与性能。 |
| 853 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0323` | 性能测试 | 2 | dts2cpp enum 扩充-多声明：同文件 10 个 enum 的解析结果与性能。 |
| 854 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0324` | 性能测试 | 2 | dts2cpp enum 扩充-修饰符：export enum 的解析结果与性能。 |
| 855 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0325` | 性能测试 | 2 | dts2cpp enum 扩充-修饰符：declare enum 的解析结果与性能。 |
| 856 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0326` | 性能测试 | 2 | dts2cpp enum 扩充-修饰符：const enum 的解析结果与性能。 |
| 857 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0327` | 性能测试 | 2 | dts2cpp enum 扩充-修饰符：export const enum 的解析结果与性能。 |
| 858 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0328` | 性能测试 | 2 | dts2cpp enum 扩充-修饰符：declare const enum 的解析结果与性能。 |
| 859 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0329` | 性能测试 | 2 | dts2cpp enum 扩充-修饰符：export declare enum 的解析结果与性能。 |
| 860 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0330` | 性能测试 | 2 | dts2cpp enum 扩充-修饰符：export declare const enum 的解析结果与性能。 |
| 861 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0331` | 性能测试 | 2 | dts2cpp enum 扩充-修饰符：namespace+export enum 的解析结果与性能。 |
| 862 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0332` | 性能测试 | 2 | dts2cpp enum 扩充-修饰符：namespace+declare enum 的解析结果与性能。 |
| 863 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0333` | 性能测试 | 2 | dts2cpp enum 扩充-修饰符：namespace+export const enum 的解析结果与性能。 |
| 864 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0334` | 性能测试 | 2 | dts2cpp enum 扩充-修饰符：module+export enum 的解析结果与性能。 |
| 865 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0335` | 性能测试 | 2 | dts2cpp enum 扩充-修饰符：module+declare const enum 的解析结果与性能。 |
| 866 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0336` | 性能测试 | 2 | dts2cpp enum 扩充-边界：空 enum 的解析结果与性能。 |
| 867 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0337` | 性能测试 | 2 | dts2cpp enum 扩充-边界：单成员 的解析结果与性能。 |
| 868 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0338` | 性能测试 | 2 | dts2cpp enum 扩充-边界：单成员赋值 的解析结果与性能。 |
| 869 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0339` | 性能测试 | 2 | dts2cpp enum 扩充-边界：尾逗号 的解析结果与性能。 |
| 870 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0340` | 性能测试 | 2 | dts2cpp enum 扩充-边界：无分号 的解析结果与性能。 |
| 871 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0341` | 性能测试 | 2 | dts2cpp enum 扩充-边界：注释成员 的解析结果与性能。 |
| 872 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0342` | 性能测试 | 2 | dts2cpp enum 扩充-边界：块注释 的解析结果与性能。 |
| 873 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0343` | 性能测试 | 2 | dts2cpp enum 扩充-边界：中文成员 的解析结果与性能。 |
| 874 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0344` | 性能测试 | 2 | dts2cpp enum 扩充-边界：成员引用联合 的解析结果与性能。 |
| 875 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0345` | 性能测试 | 2 | dts2cpp enum 扩充-边界：前向引用 的解析结果与性能。 |
| 876 | `conversion_tsenum.part06.test.ts` | `dts2cpp_enum_0346` | 性能测试 | 2 | dts2cpp enum import-自定义文件：import + enum 的解析结果与性能。 |
| 877 | `conversion_tsenum.part06.test.ts` | `dts2cpp_enum_0347` | 性能测试 | 2 | dts2cpp enum import-自定义文件：import + export enum 赋值 的解析结果与性能。 |
| 878 | `conversion_tsenum.part06.test.ts` | `dts2cpp_enum_0348` | 性能测试 | 2 | dts2cpp enum namespace-变量+枚举：namespace 内变量 + enum 的解析结果与性能。 |
| 879 | `conversion_tsenum.part06.test.ts` | `dts2cpp_enum_0349` | 性能测试 | 2 | dts2cpp enum namespace-变量+枚举：export namespace 内变量 + enum 的解析结果与性能。 |
| 880 | `conversion_tsenum.part06.test.ts` | `dts2cpp_enum_0350` | 性能测试 | 2 | dts2cpp enum import-自定义文件：import + const enum 的解析结果与性能。 |
| 881 | `conversion_tsenum.part06.test.ts` | `dts2cpp_enum_0351` | 性能测试 | 2 | dts2cpp enum namespace-变量+枚举+函数：多枚举混合 的解析结果与性能。 |
| 882 | `conversion_tsenum.part06.test.ts` | `dts2cpp_enum_0352` | 性能测试 | 2 | dts2cpp enum import-自定义文件：枚举值引用导入枚举 的解析结果与性能。 |
| 883 | `conversion_tsenum.part06.test.ts` | `dts2cpp_enum_0353` | 性能测试 | 2 | dts2cpp enum namespace-变量+枚举：declare namespace 枚举 的解析结果与性能。 |
| 884 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0001` | 性能测试 | 2 | dts2cpp class 对齐 parsetsclass test_1：一般 class（2 属性 + 2 无返回注解方法） 的解析结果与性能。 |
| 885 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0002` | 性能测试 | 2 | dts2cpp class 对齐 test_2：30 属性 + 13 方法全类型覆盖（含函数类型字段与 Map/Array/Set） 的解析结果与性能。 |
| 886 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0003` | 性能测试 | 2 | dts2cpp class 对齐 test_3：模板类 的解析结果与性能。 |
| 887 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0004` | 性能测试 | 2 | dts2cpp class 对齐 test_4：继承 extends 的解析结果与性能。 |
| 888 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0005` | 性能测试 | 2 | dts2cpp class 对齐 test_5：定长数组维度属性/参数 的解析结果与性能。 |
| 889 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0006` | 性能测试 | 2 | dts2cpp class 对齐 test_6：模板继承约束 的解析结果与性能。 |
| 890 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0007` | 性能测试 | 2 | dts2cpp class 对齐 test_7：可选属性/参数 的解析结果与性能。 |
| 891 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0008` | 性能测试 | 2 | dts2cpp class 对齐 test_8：多种注释 的解析结果与性能。 |
| 892 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0009` | 性能测试 | 2 | dts2cpp class 对齐 test_9：readonly/public/private/const 修饰符（剥离后解析） 的解析结果与性能。 |
| 893 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0010` | 性能测试 | 2 | dts2cpp class 对齐 test_10：索引签名（解析时丢弃） 的解析结果与性能。 |
| 894 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0011` | 性能测试 | 2 | dts2cpp class 对齐 test_13：泛型对象/字面量/嵌套泛型属性 的解析结果与性能。 |
| 895 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0012` | 性能测试 | 2 | dts2cpp class 对齐 test_14：ReadonlyArray/readonly 数组/元组属性 的解析结果与性能。 |
| 896 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0013` | 性能测试 | 2 | dts2cpp class 对齐 test_16：readonly/普通元组属性 的解析结果与性能。 |
| 897 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0014` | 性能测试 | 2 | dts2cpp class 对齐 test_17：keyof 属性 的解析结果与性能。 |
| 898 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0015` | 性能测试 | 2 | dts2cpp class 对齐 test_19：索引访问类型属性 的解析结果与性能。 |
| 899 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0016` | 性能测试 | 2 | dts2cpp class 对齐 test_20：条件类型属性 的解析结果与性能。 |
| 900 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0017` | 性能测试 | 2 | dts2cpp class 对齐 test_22：模板字面类型与泛型方法 的解析结果与性能。 |
| 901 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0018` | 性能测试 | 2 | dts2cpp class 对齐 test_23：内在字符串操作类型属性 的解析结果与性能。 |
| 902 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0019` | 性能测试 | 2 | dts2cpp class 对齐 test_24：export class 的解析结果与性能。 |
| 903 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0020` | 性能测试 | 2 | dts2cpp class 对齐 test_26：declare namespace 嵌套类 的解析结果与性能。 |
| 904 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0021` | 性能测试 | 2 | dts2cpp class 对齐 test_27：namespace 内继承类 的解析结果与性能。 |
| 905 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0022` | 性能测试 | 2 | dts2cpp class 对齐 test_28：namespace 内两个独立类 的解析结果与性能。 |
| 906 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0023` | 性能测试 | 2 | dts2cpp class 对齐 test_42：单行 class 的解析结果与性能。 |
| 907 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0024` | 性能测试 | 2 | dts2cpp class 对齐 test_45：中文类名与继承 的解析结果与性能。 |
| 908 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0025` | 性能测试 | 2 | dts2cpp class 对齐 test_49：两个空类 的解析结果与性能。 |
| 909 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0026` | 性能测试 | 2 | dts2cpp class 对齐 test_64：单行 export class 的解析结果与性能。 |
| 910 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0027` | 性能测试 | 2 | dts2cpp class 对齐 test_69：可选/非空断言属性与 rest 参数方法 的解析结果与性能。 |
| 911 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0028` | 性能测试 | 2 | dts2cpp class 对齐 test_70：函数重载（3 个重载签名） 的解析结果与性能。 |
| 912 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0029` | 性能测试 | 2 | dts2cpp class 对齐 test_72：static/abstract/protected/this 参数 的解析结果与性能。 |
| 913 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0030` | 性能测试 | 2 | dts2cpp class 对齐 test_74：getter/setter 的解析结果与性能。 |
| 914 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0031` | 性能测试 | 2 | dts2cpp class 对齐 test_75：implements 接口 的解析结果与性能。 |
| 915 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0032` | 性能测试 | 2 | dts2cpp class 扩充：20 属性全基本类型/容器/元组矩阵 的解析结果与性能。 |
| 916 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0033` | 性能测试 | 2 | dts2cpp class 扩充：30 属性进阶类型矩阵（含内置对象/容器嵌套） 的解析结果与性能。 |
| 917 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0034` | 性能测试 | 2 | dts2cpp class 扩充：50 属性全类型矩阵（规模压测） 的解析结果与性能。 |
| 918 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0035` | 性能测试 | 2 | dts2cpp class 扩充：20 方法返回类型矩阵（基本/数组/元组/联合/函数/对象） 的解析结果与性能。 |
| 919 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0036` | 性能测试 | 2 | dts2cpp class 扩充：10 方法参数形态矩阵（多参/可选/rest/默认/解构/联合/容器） 的解析结果与性能。 |
| 920 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0037` | 性能测试 | 2 | dts2cpp class 扩充：多参数 + 返回注解方法组合 的解析结果与性能。 |
| 921 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0038` | 性能测试 | 2 | dts2cpp class 扩充：同文件两个完整类 的解析结果与性能。 |
| 922 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0039` | 性能测试 | 2 | dts2cpp class 扩充：同文件三个类（多声明吞吐） 的解析结果与性能。 |
| 923 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0040` | 性能测试 | 2 | dts2cpp class 扩充：双泛型类 的解析结果与性能。 |
| 924 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0041` | 性能测试 | 2 | dts2cpp class 扩充：属性默认值初始化 的解析结果与性能。 |
| 925 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0042` | 性能测试 | 2 | dts2cpp class 扩充：三重重载方法 的解析结果与性能。 |
| 926 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0043` | 性能测试 | 2 | dts2cpp class 扩充：中文类名/属性/方法 的解析结果与性能。 |
| 927 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0044` | 性能测试 | 2 | dts2cpp class 扩充：空类 的解析结果与性能。 |
| 928 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0045` | 性能测试 | 2 | dts2cpp class 扩充：implements 多接口 的解析结果与性能。 |
| 929 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0046` | 性能测试 | 2 | dts2cpp class 扩充：三级继承链 的解析结果与性能。 |
| 930 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0047` | 性能测试 | 2 | dts2cpp class 扩充：10 属性 + 10 方法混合大集合 的解析结果与性能。 |
| 931 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0048` | 性能测试 | 2 | dts2cpp class 扩充：字面量/交集/模板/联合属性矩阵 的解析结果与性能。 |
| 932 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0049` | 性能测试 | 2 | dts2cpp class 扩充：字面量联合参数与返回 的解析结果与性能。 |
| 933 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0050` | 性能测试 | 2 | dts2cpp class 扩充：内置对象引用联合参数/返回 的解析结果与性能。 |
| 934 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0051` | 性能测试 | 2 | dts2cpp class 扩充：数组参数/多维数组返回 的解析结果与性能。 |
| 935 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0052` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：number × plain 修饰（4 属性） 的解析结果与性能。 |
| 936 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0053` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：number × public 修饰（4 属性） 的解析结果与性能。 |
| 937 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0054` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：number × readonly 修饰（4 属性） 的解析结果与性能。 |
| 938 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0055` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：number × optional 修饰（4 属性） 的解析结果与性能。 |
| 939 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0056` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：string × plain 修饰（4 属性） 的解析结果与性能。 |
| 940 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0057` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：string × public 修饰（4 属性） 的解析结果与性能。 |
| 941 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0058` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：string × readonly 修饰（4 属性） 的解析结果与性能。 |
| 942 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0059` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：string × optional 修饰（4 属性） 的解析结果与性能。 |
| 943 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0060` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：boolean × plain 修饰（4 属性） 的解析结果与性能。 |
| 944 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0061` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：boolean × public 修饰（4 属性） 的解析结果与性能。 |
| 945 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0062` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：boolean × readonly 修饰（4 属性） 的解析结果与性能。 |
| 946 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0063` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：boolean × optional 修饰（4 属性） 的解析结果与性能。 |
| 947 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0064` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：any × plain 修饰（4 属性） 的解析结果与性能。 |
| 948 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0065` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：any × public 修饰（4 属性） 的解析结果与性能。 |
| 949 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0066` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：any × readonly 修饰（4 属性） 的解析结果与性能。 |
| 950 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0067` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：any × optional 修饰（4 属性） 的解析结果与性能。 |
| 951 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0068` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：unknown × plain 修饰（4 属性） 的解析结果与性能。 |
| 952 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0069` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：unknown × public 修饰（4 属性） 的解析结果与性能。 |
| 953 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0070` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：unknown × readonly 修饰（4 属性） 的解析结果与性能。 |
| 954 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0071` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：unknown × optional 修饰（4 属性） 的解析结果与性能。 |
| 955 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0072` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：null × plain 修饰（4 属性） 的解析结果与性能。 |
| 956 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0073` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：null × public 修饰（4 属性） 的解析结果与性能。 |
| 957 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0074` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：null × readonly 修饰（4 属性） 的解析结果与性能。 |
| 958 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0075` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：null × optional 修饰（4 属性） 的解析结果与性能。 |
| 959 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0076` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：undefined × plain 修饰（4 属性） 的解析结果与性能。 |
| 960 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0077` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：undefined × public 修饰（4 属性） 的解析结果与性能。 |
| 961 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0078` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：undefined × readonly 修饰（4 属性） 的解析结果与性能。 |
| 962 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0079` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：undefined × optional 修饰（4 属性） 的解析结果与性能。 |
| 963 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0080` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：symbol × plain 修饰（4 属性） 的解析结果与性能。 |
| 964 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0081` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：symbol × public 修饰（4 属性） 的解析结果与性能。 |
| 965 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0082` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：symbol × readonly 修饰（4 属性） 的解析结果与性能。 |
| 966 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0083` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：symbol × optional 修饰（4 属性） 的解析结果与性能。 |
| 967 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0084` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：bigint × plain 修饰（4 属性） 的解析结果与性能。 |
| 968 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0085` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：bigint × public 修饰（4 属性） 的解析结果与性能。 |
| 969 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0086` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：bigint × readonly 修饰（4 属性） 的解析结果与性能。 |
| 970 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0087` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：bigint × optional 修饰（4 属性） 的解析结果与性能。 |
| 971 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0088` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：object × plain 修饰（4 属性） 的解析结果与性能。 |
| 972 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0089` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：object × public 修饰（4 属性） 的解析结果与性能。 |
| 973 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0090` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：object × readonly 修饰（4 属性） 的解析结果与性能。 |
| 974 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0091` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：object × optional 修饰（4 属性） 的解析结果与性能。 |
| 975 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0092` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：number[] × plain 修饰（4 属性） 的解析结果与性能。 |
| 976 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0093` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：number[] × public 修饰（4 属性） 的解析结果与性能。 |
| 977 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0094` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：number[] × readonly 修饰（4 属性） 的解析结果与性能。 |
| 978 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0095` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：number[] × optional 修饰（4 属性） 的解析结果与性能。 |
| 979 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0096` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：string[] × plain 修饰（4 属性） 的解析结果与性能。 |
| 980 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0097` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：string[] × public 修饰（4 属性） 的解析结果与性能。 |
| 981 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0098` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：string[] × readonly 修饰（4 属性） 的解析结果与性能。 |
| 982 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0099` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：string[] × optional 修饰（4 属性） 的解析结果与性能。 |
| 983 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0100` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：boolean[] × plain 修饰（4 属性） 的解析结果与性能。 |
| 984 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0101` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：boolean[] × public 修饰（4 属性） 的解析结果与性能。 |
| 985 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0102` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：boolean[] × readonly 修饰（4 属性） 的解析结果与性能。 |
| 986 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0103` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：boolean[] × optional 修饰（4 属性） 的解析结果与性能。 |
| 987 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0104` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Array<number> × plain 修饰（4 属性） 的解析结果与性能。 |
| 988 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0105` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Array<number> × public 修饰（4 属性） 的解析结果与性能。 |
| 989 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0106` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Array<number> × readonly 修饰（4 属性） 的解析结果与性能。 |
| 990 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0107` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Array<number> × optional 修饰（4 属性） 的解析结果与性能。 |
| 991 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0108` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Map<string, number> × plain 修饰（4 属性） 的解析结果与性能。 |
| 992 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0109` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Map<string, number> × public 修饰（4 属性） 的解析结果与性能。 |
| 993 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0110` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Map<string, number> × readonly 修饰（4 属性） 的解析结果与性能。 |
| 994 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0111` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Map<string, number> × optional 修饰（4 属性） 的解析结果与性能。 |
| 995 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0112` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Set<number> × plain 修饰（4 属性） 的解析结果与性能。 |
| 996 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0113` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Set<number> × public 修饰（4 属性） 的解析结果与性能。 |
| 997 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0114` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Set<number> × readonly 修饰（4 属性） 的解析结果与性能。 |
| 998 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0115` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Set<number> × optional 修饰（4 属性） 的解析结果与性能。 |
| 999 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0116` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Record<string, string> × plain 修饰（4 属性） 的解析结果与性能。 |
| 1000 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0117` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Record<string, string> × public 修饰（4 属性） 的解析结果与性能。 |
| 1001 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0118` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Record<string, string> × readonly 修饰（4 属性） 的解析结果与性能。 |
| 1002 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0119` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Record<string, string> × optional 修饰（4 属性） 的解析结果与性能。 |
| 1003 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0120` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Promise<string> × plain 修饰（4 属性） 的解析结果与性能。 |
| 1004 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0121` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Promise<string> × public 修饰（4 属性） 的解析结果与性能。 |
| 1005 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0122` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Promise<string> × readonly 修饰（4 属性） 的解析结果与性能。 |
| 1006 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0123` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Promise<string> × optional 修饰（4 属性） 的解析结果与性能。 |
| 1007 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0124` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：[string, number] × plain 修饰（4 属性） 的解析结果与性能。 |
| 1008 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0125` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：[string, number] × public 修饰（4 属性） 的解析结果与性能。 |
| 1009 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0126` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：[string, number] × readonly 修饰（4 属性） 的解析结果与性能。 |
| 1010 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0127` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：[string, number] × optional 修饰（4 属性） 的解析结果与性能。 |
| 1011 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0128` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：(a: number) => void × plain 修饰（4 属性） 的解析结果与性能。 |
| 1012 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0129` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：(a: number) => void × public 修饰（4 属性） 的解析结果与性能。 |
| 1013 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0130` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：(a: number) => void × readonly 修饰（4 属性） 的解析结果与性能。 |
| 1014 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0131` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：(a: number) => void × optional 修饰（4 属性） 的解析结果与性能。 |
| 1015 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0132` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Date × plain 修饰（4 属性） 的解析结果与性能。 |
| 1016 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0133` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Date × public 修饰（4 属性） 的解析结果与性能。 |
| 1017 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0134` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Date × readonly 修饰（4 属性） 的解析结果与性能。 |
| 1018 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0135` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Date × optional 修饰（4 属性） 的解析结果与性能。 |
| 1019 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0136` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：RegExp × plain 修饰（4 属性） 的解析结果与性能。 |
| 1020 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0137` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：RegExp × public 修饰（4 属性） 的解析结果与性能。 |
| 1021 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0138` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：RegExp × readonly 修饰（4 属性） 的解析结果与性能。 |
| 1022 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0139` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：RegExp × optional 修饰（4 属性） 的解析结果与性能。 |
| 1023 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0140` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Error × plain 修饰（4 属性） 的解析结果与性能。 |
| 1024 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0141` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Error × public 修饰（4 属性） 的解析结果与性能。 |
| 1025 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0142` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Error × readonly 修饰（4 属性） 的解析结果与性能。 |
| 1026 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0143` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Error × optional 修饰（4 属性） 的解析结果与性能。 |
| 1027 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0144` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Uint8Array × plain 修饰（4 属性） 的解析结果与性能。 |
| 1028 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0145` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Uint8Array × public 修饰（4 属性） 的解析结果与性能。 |
| 1029 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0146` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Uint8Array × readonly 修饰（4 属性） 的解析结果与性能。 |
| 1030 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0147` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Uint8Array × optional 修饰（4 属性） 的解析结果与性能。 |
| 1031 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0148` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵："lit" × plain 修饰（4 属性） 的解析结果与性能。 |
| 1032 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0149` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵："lit" × public 修饰（4 属性） 的解析结果与性能。 |
| 1033 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0150` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵："lit" × readonly 修饰（4 属性） 的解析结果与性能。 |
| 1034 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0151` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵："lit" × optional 修饰（4 属性） 的解析结果与性能。 |
| 1035 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0152` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：42 × plain 修饰（4 属性） 的解析结果与性能。 |
| 1036 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0153` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：42 × public 修饰（4 属性） 的解析结果与性能。 |
| 1037 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0154` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：42 × readonly 修饰（4 属性） 的解析结果与性能。 |
| 1038 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0155` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：42 × optional 修饰（4 属性） 的解析结果与性能。 |
| 1039 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0156` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：true × plain 修饰（4 属性） 的解析结果与性能。 |
| 1040 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0157` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：true × public 修饰（4 属性） 的解析结果与性能。 |
| 1041 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0158` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：true × readonly 修饰（4 属性） 的解析结果与性能。 |
| 1042 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0159` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：true × optional 修饰（4 属性） 的解析结果与性能。 |
| 1043 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0160` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：string | number × plain 修饰（4 属性） 的解析结果与性能。 |
| 1044 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0161` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：string | number × public 修饰（4 属性） 的解析结果与性能。 |
| 1045 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0162` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：string | number × readonly 修饰（4 属性） 的解析结果与性能。 |
| 1046 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0163` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：string | number × optional 修饰（4 属性） 的解析结果与性能。 |
| 1047 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0164` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：string & {} × plain 修饰（4 属性） 的解析结果与性能。 |
| 1048 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0165` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：string & {} × public 修饰（4 属性） 的解析结果与性能。 |
| 1049 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0166` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：string & {} × readonly 修饰（4 属性） 的解析结果与性能。 |
| 1050 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0167` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：string & {} × optional 修饰（4 属性） 的解析结果与性能。 |
| 1051 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0168` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：{ id: number } × plain 修饰（4 属性） 的解析结果与性能。 |
| 1052 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0169` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：{ id: number } × public 修饰（4 属性） 的解析结果与性能。 |
| 1053 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0170` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：{ id: number } × readonly 修饰（4 属性） 的解析结果与性能。 |
| 1054 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0171` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：{ id: number } × optional 修饰（4 属性） 的解析结果与性能。 |
| 1055 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0172` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 number（无参方法 ×3） 的解析结果与性能。 |
| 1056 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0173` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 number（带参方法 ×3） 的解析结果与性能。 |
| 1057 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0174` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 string（无参方法 ×3） 的解析结果与性能。 |
| 1058 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0175` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 string（带参方法 ×3） 的解析结果与性能。 |
| 1059 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0176` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 boolean（无参方法 ×3） 的解析结果与性能。 |
| 1060 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0177` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 boolean（带参方法 ×3） 的解析结果与性能。 |
| 1061 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0178` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 any（无参方法 ×3） 的解析结果与性能。 |
| 1062 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0179` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 any（带参方法 ×3） 的解析结果与性能。 |
| 1063 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0180` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 unknown（无参方法 ×3） 的解析结果与性能。 |
| 1064 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0181` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 unknown（带参方法 ×3） 的解析结果与性能。 |
| 1065 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0182` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 null（无参方法 ×3） 的解析结果与性能。 |
| 1066 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0183` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 null（带参方法 ×3） 的解析结果与性能。 |
| 1067 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0184` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 undefined（无参方法 ×3） 的解析结果与性能。 |
| 1068 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0185` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 undefined（带参方法 ×3） 的解析结果与性能。 |
| 1069 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0186` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 symbol（无参方法 ×3） 的解析结果与性能。 |
| 1070 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0187` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 symbol（带参方法 ×3） 的解析结果与性能。 |
| 1071 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0188` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 bigint（无参方法 ×3） 的解析结果与性能。 |
| 1072 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0189` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 bigint（带参方法 ×3） 的解析结果与性能。 |
| 1073 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0190` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 object（无参方法 ×3） 的解析结果与性能。 |
| 1074 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0191` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 object（带参方法 ×3） 的解析结果与性能。 |
| 1075 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0192` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 number[]（无参方法 ×3） 的解析结果与性能。 |
| 1076 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0193` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 number[]（带参方法 ×3） 的解析结果与性能。 |
| 1077 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0194` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 string[]（无参方法 ×3） 的解析结果与性能。 |
| 1078 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0195` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 string[]（带参方法 ×3） 的解析结果与性能。 |
| 1079 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0196` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 boolean[][]（无参方法 ×3） 的解析结果与性能。 |
| 1080 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0197` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 boolean[][]（带参方法 ×3） 的解析结果与性能。 |
| 1081 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0198` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 [string, number]（无参方法 ×3） 的解析结果与性能。 |
| 1082 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0199` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 [string, number]（带参方法 ×3） 的解析结果与性能。 |
| 1083 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0200` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 (a: number) => void（无参方法 ×3） 的解析结果与性能。 |
| 1084 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0201` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 (a: number) => void（带参方法 ×3） 的解析结果与性能。 |
| 1085 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0202` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 string | number（无参方法 ×3） 的解析结果与性能。 |
| 1086 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0203` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 string | number（带参方法 ×3） 的解析结果与性能。 |
| 1087 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0204` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 boolean | null（无参方法 ×3） 的解析结果与性能。 |
| 1088 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0205` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 boolean | null（带参方法 ×3） 的解析结果与性能。 |
| 1089 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0206` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 "lit" | 1（无参方法 ×3） 的解析结果与性能。 |
| 1090 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0207` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 "lit" | 1（带参方法 ×3） 的解析结果与性能。 |
| 1091 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0208` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 42（无参方法 ×3） 的解析结果与性能。 |
| 1092 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0209` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 42（带参方法 ×3） 的解析结果与性能。 |
| 1093 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0210` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 { id: number }（无参方法 ×3） 的解析结果与性能。 |
| 1094 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0211` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 { id: number }（带参方法 ×3） 的解析结果与性能。 |
| 1095 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0212` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 number（单参） 的解析结果与性能。 |
| 1096 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0213` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 number（双参第二位） 的解析结果与性能。 |
| 1097 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0214` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 string（单参） 的解析结果与性能。 |
| 1098 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0215` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 string（双参第二位） 的解析结果与性能。 |
| 1099 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0216` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 boolean（单参） 的解析结果与性能。 |
| 1100 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0217` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 boolean（双参第二位） 的解析结果与性能。 |
| 1101 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0218` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 any（单参） 的解析结果与性能。 |
| 1102 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0219` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 any（双参第二位） 的解析结果与性能。 |
| 1103 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0220` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 unknown（单参） 的解析结果与性能。 |
| 1104 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0221` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 unknown（双参第二位） 的解析结果与性能。 |
| 1105 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0222` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 null（单参） 的解析结果与性能。 |
| 1106 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0223` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 null（双参第二位） 的解析结果与性能。 |
| 1107 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0224` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 undefined（单参） 的解析结果与性能。 |
| 1108 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0225` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 undefined（双参第二位） 的解析结果与性能。 |
| 1109 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0226` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 symbol（单参） 的解析结果与性能。 |
| 1110 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0227` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 symbol（双参第二位） 的解析结果与性能。 |
| 1111 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0228` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 bigint（单参） 的解析结果与性能。 |
| 1112 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0229` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 bigint（双参第二位） 的解析结果与性能。 |
| 1113 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0230` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 object（单参） 的解析结果与性能。 |
| 1114 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0231` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 object（双参第二位） 的解析结果与性能。 |
| 1115 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0232` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 number[]（单参） 的解析结果与性能。 |
| 1116 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0233` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 number[]（双参第二位） 的解析结果与性能。 |
| 1117 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0234` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 string[]（单参） 的解析结果与性能。 |
| 1118 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0235` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 string[]（双参第二位） 的解析结果与性能。 |
| 1119 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0236` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 boolean[]（单参） 的解析结果与性能。 |
| 1120 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0237` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 boolean[]（双参第二位） 的解析结果与性能。 |
| 1121 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0238` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 Array<number>（单参） 的解析结果与性能。 |
| 1122 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0239` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 Array<number>（双参第二位） 的解析结果与性能。 |
| 1123 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0240` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 Map<string, number>（单参） 的解析结果与性能。 |
| 1124 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0241` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 Map<string, number>（双参第二位） 的解析结果与性能。 |
| 1125 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0242` | 性能测试 | 2 | dts2cpp class 扩充-规模：5 属性 class 的解析结果与性能。 |
| 1126 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0243` | 性能测试 | 2 | dts2cpp class 扩充-规模：10 属性 class 的解析结果与性能。 |
| 1127 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0244` | 性能测试 | 2 | dts2cpp class 扩充-规模：15 属性 class 的解析结果与性能。 |
| 1128 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0245` | 性能测试 | 2 | dts2cpp class 扩充-规模：20 属性 class 的解析结果与性能。 |
| 1129 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0246` | 性能测试 | 2 | dts2cpp class 扩充-规模：25 属性 class 的解析结果与性能。 |
| 1130 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0247` | 性能测试 | 2 | dts2cpp class 扩充-规模：30 属性 class 的解析结果与性能。 |
| 1131 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0248` | 性能测试 | 2 | dts2cpp class 扩充-规模：35 属性 class 的解析结果与性能。 |
| 1132 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0249` | 性能测试 | 2 | dts2cpp class 扩充-规模：40 属性 class 的解析结果与性能。 |
| 1133 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0250` | 性能测试 | 2 | dts2cpp class 扩充-规模：45 属性 class 的解析结果与性能。 |
| 1134 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0251` | 性能测试 | 2 | dts2cpp class 扩充-规模：50 属性 class 的解析结果与性能。 |
| 1135 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0252` | 性能测试 | 2 | dts2cpp class 扩充-规模：55 属性 class 的解析结果与性能。 |
| 1136 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0253` | 性能测试 | 2 | dts2cpp class 扩充-规模：60 属性 class 的解析结果与性能。 |
| 1137 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0254` | 性能测试 | 2 | dts2cpp class 扩充-规模：65 属性 class 的解析结果与性能。 |
| 1138 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0255` | 性能测试 | 2 | dts2cpp class 扩充-规模：70 属性 class 的解析结果与性能。 |
| 1139 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0256` | 性能测试 | 2 | dts2cpp class 扩充-规模：75 属性 class 的解析结果与性能。 |
| 1140 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0257` | 性能测试 | 2 | dts2cpp class 扩充-规模：80 属性 class 的解析结果与性能。 |
| 1141 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0258` | 性能测试 | 2 | dts2cpp class 扩充-规模：85 属性 class 的解析结果与性能。 |
| 1142 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0259` | 性能测试 | 2 | dts2cpp class 扩充-规模：90 属性 class 的解析结果与性能。 |
| 1143 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0260` | 性能测试 | 2 | dts2cpp class 扩充-规模：95 属性 class 的解析结果与性能。 |
| 1144 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0261` | 性能测试 | 2 | dts2cpp class 扩充-规模：100 属性 class 的解析结果与性能。 |
| 1145 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0262` | 性能测试 | 2 | dts2cpp class 扩充-命名：UpperCamel 的解析结果与性能。 |
| 1146 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0263` | 性能测试 | 2 | dts2cpp class 扩充-命名：lowerCamel 的解析结果与性能。 |
| 1147 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0264` | 性能测试 | 2 | dts2cpp class 扩充-命名：snake_case 的解析结果与性能。 |
| 1148 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0265` | 性能测试 | 2 | dts2cpp class 扩充-命名：Trailing2 的解析结果与性能。 |
| 1149 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0266` | 性能测试 | 2 | dts2cpp class 扩充-命名：_leading 的解析结果与性能。 |
| 1150 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0267` | 性能测试 | 2 | dts2cpp class 扩充-命名：Double__Under 的解析结果与性能。 |
| 1151 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0268` | 性能测试 | 2 | dts2cpp class 扩充-命名：C 的解析结果与性能。 |
| 1152 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0269` | 性能测试 | 2 | dts2cpp class 扩充-命名：C1 的解析结果与性能。 |
| 1153 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0270` | 性能测试 | 2 | dts2cpp class 扩充-命名：c1 的解析结果与性能。 |
| 1154 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0271` | 性能测试 | 2 | dts2cpp class 扩充-命名：Class 的解析结果与性能。 |
| 1155 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0272` | 性能测试 | 2 | dts2cpp class 扩充-命名：class1 的解析结果与性能。 |
| 1156 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0273` | 性能测试 | 2 | dts2cpp class 扩充-命名：中文类 的解析结果与性能。 |
| 1157 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0274` | 性能测试 | 2 | dts2cpp class 扩充-命名：VersionV2 的解析结果与性能。 |
| 1158 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0275` | 性能测试 | 2 | dts2cpp class 扩充-命名：HTTPClient 的解析结果与性能。 |
| 1159 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0276` | 性能测试 | 2 | dts2cpp class 扩充-命名：KLASS 的解析结果与性能。 |
| 1160 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0277` | 性能测试 | 2 | dts2cpp class 扩充-多声明：同文件 2 个 class 的解析结果与性能。 |
| 1161 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0278` | 性能测试 | 2 | dts2cpp class 扩充-多声明：同文件 3 个 class 的解析结果与性能。 |
| 1162 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0279` | 性能测试 | 2 | dts2cpp class 扩充-多声明：同文件 4 个 class 的解析结果与性能。 |
| 1163 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0280` | 性能测试 | 2 | dts2cpp class 扩充-多声明：同文件 5 个 class 的解析结果与性能。 |
| 1164 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0281` | 性能测试 | 2 | dts2cpp class 扩充-多声明：同文件 6 个 class 的解析结果与性能。 |
| 1165 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0282` | 性能测试 | 2 | dts2cpp class 扩充-多声明：同文件 7 个 class 的解析结果与性能。 |
| 1166 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0283` | 性能测试 | 2 | dts2cpp class 扩充-多声明：同文件 8 个 class 的解析结果与性能。 |
| 1167 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0284` | 性能测试 | 2 | dts2cpp class 扩充-泛型/继承：单泛型类 的解析结果与性能。 |
| 1168 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0285` | 性能测试 | 2 | dts2cpp class 扩充-泛型/继承：双泛型类 的解析结果与性能。 |
| 1169 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0286` | 性能测试 | 2 | dts2cpp class 扩充-泛型/继承：三泛型类 的解析结果与性能。 |
| 1170 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0287` | 性能测试 | 2 | dts2cpp class 扩充-泛型/继承：泛型数组属性 的解析结果与性能。 |
| 1171 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0288` | 性能测试 | 2 | dts2cpp class 扩充-泛型/继承：泛型约束 的解析结果与性能。 |
| 1172 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0289` | 性能测试 | 2 | dts2cpp class 扩充-泛型/继承：泛型继承基类 的解析结果与性能。 |
| 1173 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0290` | 性能测试 | 2 | dts2cpp class 扩充-泛型/继承：泛型方法 的解析结果与性能。 |
| 1174 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0291` | 性能测试 | 2 | dts2cpp class 扩充-泛型/继承：泛型容器属性 的解析结果与性能。 |
| 1175 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0292` | 性能测试 | 2 | dts2cpp class 扩充-泛型/继承：二级继承 的解析结果与性能。 |
| 1176 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0293` | 性能测试 | 2 | dts2cpp class 扩充-泛型/继承：三级继承 的解析结果与性能。 |
| 1177 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0294` | 性能测试 | 2 | dts2cpp class 扩充-泛型/继承：implements 单接口 的解析结果与性能。 |
| 1178 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0295` | 性能测试 | 2 | dts2cpp class 扩充-泛型/继承：implements 双接口 的解析结果与性能。 |
| 1179 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0296` | 性能测试 | 2 | dts2cpp class 扩充-泛型/继承：抽象类 的解析结果与性能。 |
| 1180 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0297` | 性能测试 | 2 | dts2cpp class 扩充-泛型/继承：静态成员 的解析结果与性能。 |
| 1181 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0298` | 性能测试 | 2 | dts2cpp class 扩充-泛型/继承：静态方法 的解析结果与性能。 |
| 1182 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0299` | 性能测试 | 2 | dts2cpp class 扩充-边界：空类 的解析结果与性能。 |
| 1183 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0300` | 性能测试 | 2 | dts2cpp class 扩充-边界：单行类 的解析结果与性能。 |
| 1184 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0301` | 性能测试 | 2 | dts2cpp class 扩充-边界：注释类 的解析结果与性能。 |
| 1185 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0302` | 性能测试 | 2 | dts2cpp class 扩充-边界：索引签名 的解析结果与性能。 |
| 1186 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0303` | 性能测试 | 2 | dts2cpp class 扩充-边界：属性初始化 的解析结果与性能。 |
| 1187 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0304` | 性能测试 | 2 | dts2cpp class 扩充-边界：getter/setter 的解析结果与性能。 |
| 1188 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0305` | 性能测试 | 2 | dts2cpp class 扩充-边界：重载方法 的解析结果与性能。 |
| 1189 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0306` | 性能测试 | 2 | dts2cpp class 扩充-边界：中文类 的解析结果与性能。 |
| 1190 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0307` | 性能测试 | 2 | dts2cpp class 扩充-边界：装饰器属性 的解析结果与性能。 |
| 1191 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0308` | 性能测试 | 2 | dts2cpp class 扩充-边界：方法参数解构 的解析结果与性能。 |
| 1192 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0309` | 性能测试 | 2 | dts2cpp class 扩充-边界：方法 rest 参数 的解析结果与性能。 |
| 1193 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0310` | 性能测试 | 2 | dts2cpp class 扩充-边界：方法默认参数 的解析结果与性能。 |
| 1194 | `conversion_tsclass.part06.test.ts` | `dts2cpp_class_0311` | 性能测试 | 2 | dts2cpp class import-自定义文件：导入类型作 class 属性 的解析结果与性能。 |
| 1195 | `conversion_tsclass.part06.test.ts` | `dts2cpp_class_0312` | 性能测试 | 2 | dts2cpp class import-自定义文件：导入回调类型属性/参数 的解析结果与性能。 |
| 1196 | `conversion_tsclass.part06.test.ts` | `dts2cpp_class_0313` | 性能测试 | 2 | dts2cpp class import-自定义文件：导入类型作返回/参数 的解析结果与性能。 |
| 1197 | `conversion_tsclass.part06.test.ts` | `dts2cpp_class_0314` | 性能测试 | 2 | dts2cpp class 函数类型-on/off：class Emitter on/off/emit 方法 的解析结果与性能。 |
| 1198 | `conversion_tsclass.part06.test.ts` | `dts2cpp_class_0315` | 性能测试 | 2 | dts2cpp class 函数类型-on/off：class EventBus on/off/once 的解析结果与性能。 |
| 1199 | `conversion_tsclass.part06.test.ts` | `dts2cpp_class_0316` | 性能测试 | 2 | dts2cpp class 函数类型-threadsafe_func：class ThreadSafeFunction 的解析结果与性能。 |
| 1200 | `conversion_tsclass.part06.test.ts` | `dts2cpp_class_0317` | 性能测试 | 2 | dts2cpp class 函数类型-static：static 方法 + static 属性 的解析结果与性能。 |
| 1201 | `conversion_tsclass.part06.test.ts` | `dts2cpp_class_0318` | 性能测试 | 2 | dts2cpp class 函数类型-static：static 工厂方法 + 计数属性 的解析结果与性能。 |
| 1202 | `conversion_tsclass.part06.test.ts` | `dts2cpp_class_0319` | 性能测试 | 2 | dts2cpp class namespace-变量+类：namespace 内变量 + 类 的解析结果与性能。 |
| 1203 | `conversion_tsclass.part06.test.ts` | `dts2cpp_class_0320` | 性能测试 | 2 | dts2cpp class namespace-变量+类：export namespace 内变量 + 类 的解析结果与性能。 |
| 1204 | `conversion_tsclass.part06.test.ts` | `dts2cpp_class_0321` | 性能测试 | 2 | dts2cpp class import + $/on 命名方法组合 的解析结果与性能。 |
| 1205 | `conversion_tsclass.part06.test.ts` | `dts2cpp_class_0322` | 性能测试 | 2 | dts2cpp class 函数类型-$：$ 命名类与方法 的解析结果与性能。 |
| 1206 | `conversion_tsclass.part06.test.ts` | `dts2cpp_class_0323` | 性能测试 | 2 | dts2cpp class import-自定义文件：继承导入的基类 的解析结果与性能。 |
| 1207 | `conversion_tsclass.part06.test.ts` | `dts2cpp_class_0324` | 性能测试 | 2 | dts2cpp class namespace-变量+函数+类：三合一混合 的解析结果与性能。 |
| 1208 | `conversion_tsclass.part06.test.ts` | `dts2cpp_class_0325` | 性能测试 | 2 | dts2cpp class import-自定义文件：导入类型作容器泛参 的解析结果与性能。 |
| 1209 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0001` | 性能测试 | 2 | dts2cpp struct 对齐 parsetsstruct test_1：一般 interface（2 成员 + 2 方法签名） 的解析结果与性能。 |
| 1210 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0002` | 性能测试 | 2 | dts2cpp struct 对齐 test_2：30 成员 + 13 方法签名全类型覆盖 的解析结果与性能。 |
| 1211 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0003` | 性能测试 | 2 | dts2cpp struct 对齐 test_3：泛型 interface 的解析结果与性能。 |
| 1212 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0004` | 性能测试 | 2 | dts2cpp struct 对齐 test_4：interface 继承 的解析结果与性能。 |
| 1213 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0005` | 性能测试 | 2 | dts2cpp struct 对齐 test_5：定长数组成员/参数 的解析结果与性能。 |
| 1214 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0006` | 性能测试 | 2 | dts2cpp struct 对齐 test_6：泛型约束 interface 的解析结果与性能。 |
| 1215 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0007` | 性能测试 | 2 | dts2cpp struct 对齐 test_7：可选成员/参数 的解析结果与性能。 |
| 1216 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0008` | 性能测试 | 2 | dts2cpp struct 对齐 test_8：多种注释 的解析结果与性能。 |
| 1217 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0009` | 性能测试 | 2 | dts2cpp struct 对齐 test_9：修饰符成员 的解析结果与性能。 |
| 1218 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0010` | 性能测试 | 2 | dts2cpp struct 对齐 test_10：索引签名成员 的解析结果与性能。 |
| 1219 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0011` | 性能测试 | 2 | dts2cpp struct 对齐 test_13：泛型/字面量/嵌套泛型成员 的解析结果与性能。 |
| 1220 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0012` | 性能测试 | 2 | dts2cpp struct 对齐 test_14：ReadonlyArray/元组成员 的解析结果与性能。 |
| 1221 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0013` | 性能测试 | 2 | dts2cpp struct 对齐 test_16：元组成员 的解析结果与性能。 |
| 1222 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0014` | 性能测试 | 2 | dts2cpp struct 对齐 test_17：keyof 成员 的解析结果与性能。 |
| 1223 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0015` | 性能测试 | 2 | dts2cpp struct 对齐 test_19：索引访问类型成员 的解析结果与性能。 |
| 1224 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0016` | 性能测试 | 2 | dts2cpp struct 对齐 test_20：条件类型成员 的解析结果与性能。 |
| 1225 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0017` | 性能测试 | 2 | dts2cpp struct 对齐 test_22：模板字面与泛型方法签名 的解析结果与性能。 |
| 1226 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0018` | 性能测试 | 2 | dts2cpp struct 对齐 test_23：内在字符串操作类型成员 的解析结果与性能。 |
| 1227 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0019` | 性能测试 | 2 | dts2cpp struct 对齐 test_24：export interface 的解析结果与性能。 |
| 1228 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0020` | 性能测试 | 2 | dts2cpp struct 对齐 test_26：declare namespace 嵌套 interface 的解析结果与性能。 |
| 1229 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0021` | 性能测试 | 2 | dts2cpp struct 对齐 test_27：namespace 内继承 interface 的解析结果与性能。 |
| 1230 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0022` | 性能测试 | 2 | dts2cpp struct 对齐 test_28：namespace 内两个独立 interface 的解析结果与性能。 |
| 1231 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0023` | 性能测试 | 2 | dts2cpp struct 对齐 test_42：单行 interface 的解析结果与性能。 |
| 1232 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0024` | 性能测试 | 2 | dts2cpp struct 对齐 test_45：中文 interface 名与继承 的解析结果与性能。 |
| 1233 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0025` | 性能测试 | 2 | dts2cpp struct 对齐 test_49：两个空 interface 的解析结果与性能。 |
| 1234 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0026` | 性能测试 | 2 | dts2cpp struct 对齐 test_64：单行 export interface 的解析结果与性能。 |
| 1235 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0027` | 性能测试 | 2 | dts2cpp struct 对齐 test_69：可选/非空断言成员与 rest 参数方法签名 的解析结果与性能。 |
| 1236 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0028` | 性能测试 | 2 | dts2cpp struct 对齐 test_70：重载方法签名 的解析结果与性能。 |
| 1237 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0029` | 性能测试 | 2 | dts2cpp struct 对齐 test_72：const 前缀成员与 this 参数方法 的解析结果与性能。 |
| 1238 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0030` | 性能测试 | 2 | dts2cpp struct 扩充：interface 继承链（Pingable/Sonar 均计入 structs） 的解析结果与性能。 |
| 1239 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0031` | 性能测试 | 2 | dts2cpp struct 扩充：20 成员全基本类型/容器/元组矩阵 的解析结果与性能。 |
| 1240 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0032` | 性能测试 | 2 | dts2cpp struct 扩充：30 成员进阶类型矩阵 的解析结果与性能。 |
| 1241 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0033` | 性能测试 | 2 | dts2cpp struct 扩充：50 成员全类型矩阵（规模压测） 的解析结果与性能。 |
| 1242 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0034` | 性能测试 | 2 | dts2cpp struct 扩充：20 方法签名返回类型矩阵 的解析结果与性能。 |
| 1243 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0035` | 性能测试 | 2 | dts2cpp struct 扩充：10 方法签名参数形态矩阵 的解析结果与性能。 |
| 1244 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0036` | 性能测试 | 2 | dts2cpp struct 扩充：多参数 + 返回注解方法签名 的解析结果与性能。 |
| 1245 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0037` | 性能测试 | 2 | dts2cpp struct 扩充：同文件两个完整 interface 的解析结果与性能。 |
| 1246 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0038` | 性能测试 | 2 | dts2cpp struct 扩充：同文件三个 interface（多声明吞吐） 的解析结果与性能。 |
| 1247 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0039` | 性能测试 | 2 | dts2cpp struct 扩充：双泛型 interface 的解析结果与性能。 |
| 1248 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0040` | 性能测试 | 2 | dts2cpp struct 扩充：中文 interface/成员/方法 的解析结果与性能。 |
| 1249 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0041` | 性能测试 | 2 | dts2cpp struct 扩充：空 interface 的解析结果与性能。 |
| 1250 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0042` | 性能测试 | 2 | dts2cpp struct 扩充：三级继承链 的解析结果与性能。 |
| 1251 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0043` | 性能测试 | 2 | dts2cpp struct 扩充：10 成员 + 10 方法签名混合大集合 的解析结果与性能。 |
| 1252 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0044` | 性能测试 | 2 | dts2cpp struct 扩充：字面量/交集/模板/联合成员矩阵 的解析结果与性能。 |
| 1253 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0045` | 性能测试 | 2 | dts2cpp struct 扩充：字面量联合参数与返回方法签名 的解析结果与性能。 |
| 1254 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0046` | 性能测试 | 2 | dts2cpp struct 扩充：内置对象引用联合参数/返回方法签名 的解析结果与性能。 |
| 1255 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0047` | 性能测试 | 2 | dts2cpp struct 扩充：数组参数/多维数组返回方法签名 的解析结果与性能。 |
| 1256 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0048` | 性能测试 | 2 | dts2cpp struct 扩充：判别联合 interface 继承体系 的解析结果与性能。 |
| 1257 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0049` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：number × plain 修饰（4 成员） 的解析结果与性能。 |
| 1258 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0050` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：number × public 修饰（4 成员） 的解析结果与性能。 |
| 1259 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0051` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：number × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1260 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0052` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：number × optional 修饰（4 成员） 的解析结果与性能。 |
| 1261 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0053` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：string × plain 修饰（4 成员） 的解析结果与性能。 |
| 1262 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0054` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：string × public 修饰（4 成员） 的解析结果与性能。 |
| 1263 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0055` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：string × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1264 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0056` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：string × optional 修饰（4 成员） 的解析结果与性能。 |
| 1265 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0057` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：boolean × plain 修饰（4 成员） 的解析结果与性能。 |
| 1266 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0058` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：boolean × public 修饰（4 成员） 的解析结果与性能。 |
| 1267 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0059` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：boolean × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1268 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0060` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：boolean × optional 修饰（4 成员） 的解析结果与性能。 |
| 1269 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0061` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：any × plain 修饰（4 成员） 的解析结果与性能。 |
| 1270 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0062` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：any × public 修饰（4 成员） 的解析结果与性能。 |
| 1271 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0063` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：any × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1272 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0064` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：any × optional 修饰（4 成员） 的解析结果与性能。 |
| 1273 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0065` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：unknown × plain 修饰（4 成员） 的解析结果与性能。 |
| 1274 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0066` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：unknown × public 修饰（4 成员） 的解析结果与性能。 |
| 1275 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0067` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：unknown × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1276 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0068` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：unknown × optional 修饰（4 成员） 的解析结果与性能。 |
| 1277 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0069` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：null × plain 修饰（4 成员） 的解析结果与性能。 |
| 1278 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0070` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：null × public 修饰（4 成员） 的解析结果与性能。 |
| 1279 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0071` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：null × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1280 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0072` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：null × optional 修饰（4 成员） 的解析结果与性能。 |
| 1281 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0073` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：undefined × plain 修饰（4 成员） 的解析结果与性能。 |
| 1282 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0074` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：undefined × public 修饰（4 成员） 的解析结果与性能。 |
| 1283 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0075` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：undefined × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1284 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0076` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：undefined × optional 修饰（4 成员） 的解析结果与性能。 |
| 1285 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0077` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：symbol × plain 修饰（4 成员） 的解析结果与性能。 |
| 1286 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0078` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：symbol × public 修饰（4 成员） 的解析结果与性能。 |
| 1287 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0079` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：symbol × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1288 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0080` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：symbol × optional 修饰（4 成员） 的解析结果与性能。 |
| 1289 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0081` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：bigint × plain 修饰（4 成员） 的解析结果与性能。 |
| 1290 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0082` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：bigint × public 修饰（4 成员） 的解析结果与性能。 |
| 1291 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0083` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：bigint × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1292 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0084` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：bigint × optional 修饰（4 成员） 的解析结果与性能。 |
| 1293 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0085` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：object × plain 修饰（4 成员） 的解析结果与性能。 |
| 1294 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0086` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：object × public 修饰（4 成员） 的解析结果与性能。 |
| 1295 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0087` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：object × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1296 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0088` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：object × optional 修饰（4 成员） 的解析结果与性能。 |
| 1297 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0089` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：number[] × plain 修饰（4 成员） 的解析结果与性能。 |
| 1298 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0090` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：number[] × public 修饰（4 成员） 的解析结果与性能。 |
| 1299 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0091` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：number[] × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1300 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0092` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：number[] × optional 修饰（4 成员） 的解析结果与性能。 |
| 1301 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0093` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：string[] × plain 修饰（4 成员） 的解析结果与性能。 |
| 1302 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0094` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：string[] × public 修饰（4 成员） 的解析结果与性能。 |
| 1303 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0095` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：string[] × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1304 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0096` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：string[] × optional 修饰（4 成员） 的解析结果与性能。 |
| 1305 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0097` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：boolean[] × plain 修饰（4 成员） 的解析结果与性能。 |
| 1306 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0098` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：boolean[] × public 修饰（4 成员） 的解析结果与性能。 |
| 1307 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0099` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：boolean[] × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1308 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0100` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：boolean[] × optional 修饰（4 成员） 的解析结果与性能。 |
| 1309 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0101` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Array<number> × plain 修饰（4 成员） 的解析结果与性能。 |
| 1310 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0102` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Array<number> × public 修饰（4 成员） 的解析结果与性能。 |
| 1311 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0103` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Array<number> × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1312 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0104` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Array<number> × optional 修饰（4 成员） 的解析结果与性能。 |
| 1313 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0105` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Map<string, number> × plain 修饰（4 成员） 的解析结果与性能。 |
| 1314 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0106` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Map<string, number> × public 修饰（4 成员） 的解析结果与性能。 |
| 1315 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0107` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Map<string, number> × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1316 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0108` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Map<string, number> × optional 修饰（4 成员） 的解析结果与性能。 |
| 1317 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0109` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Set<number> × plain 修饰（4 成员） 的解析结果与性能。 |
| 1318 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0110` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Set<number> × public 修饰（4 成员） 的解析结果与性能。 |
| 1319 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0111` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Set<number> × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1320 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0112` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Set<number> × optional 修饰（4 成员） 的解析结果与性能。 |
| 1321 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0113` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Record<string, string> × plain 修饰（4 成员） 的解析结果与性能。 |
| 1322 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0114` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Record<string, string> × public 修饰（4 成员） 的解析结果与性能。 |
| 1323 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0115` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Record<string, string> × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1324 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0116` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Record<string, string> × optional 修饰（4 成员） 的解析结果与性能。 |
| 1325 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0117` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Promise<string> × plain 修饰（4 成员） 的解析结果与性能。 |
| 1326 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0118` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Promise<string> × public 修饰（4 成员） 的解析结果与性能。 |
| 1327 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0119` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Promise<string> × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1328 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0120` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Promise<string> × optional 修饰（4 成员） 的解析结果与性能。 |
| 1329 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0121` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：[string, number] × plain 修饰（4 成员） 的解析结果与性能。 |
| 1330 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0122` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：[string, number] × public 修饰（4 成员） 的解析结果与性能。 |
| 1331 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0123` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：[string, number] × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1332 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0124` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：[string, number] × optional 修饰（4 成员） 的解析结果与性能。 |
| 1333 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0125` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：(a: number) => void × plain 修饰（4 成员） 的解析结果与性能。 |
| 1334 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0126` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：(a: number) => void × public 修饰（4 成员） 的解析结果与性能。 |
| 1335 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0127` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：(a: number) => void × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1336 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0128` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：(a: number) => void × optional 修饰（4 成员） 的解析结果与性能。 |
| 1337 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0129` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Date × plain 修饰（4 成员） 的解析结果与性能。 |
| 1338 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0130` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Date × public 修饰（4 成员） 的解析结果与性能。 |
| 1339 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0131` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Date × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1340 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0132` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Date × optional 修饰（4 成员） 的解析结果与性能。 |
| 1341 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0133` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：RegExp × plain 修饰（4 成员） 的解析结果与性能。 |
| 1342 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0134` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：RegExp × public 修饰（4 成员） 的解析结果与性能。 |
| 1343 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0135` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：RegExp × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1344 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0136` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：RegExp × optional 修饰（4 成员） 的解析结果与性能。 |
| 1345 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0137` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Error × plain 修饰（4 成员） 的解析结果与性能。 |
| 1346 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0138` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Error × public 修饰（4 成员） 的解析结果与性能。 |
| 1347 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0139` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Error × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1348 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0140` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Error × optional 修饰（4 成员） 的解析结果与性能。 |
| 1349 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0141` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Uint8Array × plain 修饰（4 成员） 的解析结果与性能。 |
| 1350 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0142` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Uint8Array × public 修饰（4 成员） 的解析结果与性能。 |
| 1351 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0143` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Uint8Array × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1352 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0144` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Uint8Array × optional 修饰（4 成员） 的解析结果与性能。 |
| 1353 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0145` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵："lit" × plain 修饰（4 成员） 的解析结果与性能。 |
| 1354 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0146` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵："lit" × public 修饰（4 成员） 的解析结果与性能。 |
| 1355 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0147` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵："lit" × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1356 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0148` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵："lit" × optional 修饰（4 成员） 的解析结果与性能。 |
| 1357 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0149` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：42 × plain 修饰（4 成员） 的解析结果与性能。 |
| 1358 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0150` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：42 × public 修饰（4 成员） 的解析结果与性能。 |
| 1359 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0151` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：42 × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1360 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0152` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：42 × optional 修饰（4 成员） 的解析结果与性能。 |
| 1361 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0153` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：true × plain 修饰（4 成员） 的解析结果与性能。 |
| 1362 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0154` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：true × public 修饰（4 成员） 的解析结果与性能。 |
| 1363 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0155` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：true × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1364 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0156` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：true × optional 修饰（4 成员） 的解析结果与性能。 |
| 1365 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0157` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：string | number × plain 修饰（4 成员） 的解析结果与性能。 |
| 1366 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0158` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：string | number × public 修饰（4 成员） 的解析结果与性能。 |
| 1367 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0159` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：string | number × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1368 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0160` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：string | number × optional 修饰（4 成员） 的解析结果与性能。 |
| 1369 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0161` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：string & {} × plain 修饰（4 成员） 的解析结果与性能。 |
| 1370 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0162` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：string & {} × public 修饰（4 成员） 的解析结果与性能。 |
| 1371 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0163` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：string & {} × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1372 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0164` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：string & {} × optional 修饰（4 成员） 的解析结果与性能。 |
| 1373 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0165` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：{ id: number } × plain 修饰（4 成员） 的解析结果与性能。 |
| 1374 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0166` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：{ id: number } × public 修饰（4 成员） 的解析结果与性能。 |
| 1375 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0167` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：{ id: number } × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1376 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0168` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：{ id: number } × optional 修饰（4 成员） 的解析结果与性能。 |
| 1377 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0169` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 number（无参 ×3） 的解析结果与性能。 |
| 1378 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0170` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 number（带参 ×3） 的解析结果与性能。 |
| 1379 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0171` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 string（无参 ×3） 的解析结果与性能。 |
| 1380 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0172` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 string（带参 ×3） 的解析结果与性能。 |
| 1381 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0173` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 boolean（无参 ×3） 的解析结果与性能。 |
| 1382 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0174` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 boolean（带参 ×3） 的解析结果与性能。 |
| 1383 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0175` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 any（无参 ×3） 的解析结果与性能。 |
| 1384 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0176` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 any（带参 ×3） 的解析结果与性能。 |
| 1385 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0177` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 unknown（无参 ×3） 的解析结果与性能。 |
