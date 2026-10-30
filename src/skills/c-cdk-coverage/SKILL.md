---
name: xts-coverage-check
description: >-
  核对接口是否在 XTS/ACTS 有用例覆盖：Excel 台账对照 master、单接口 lookup（建议 --subdir web）；
  web 模块 ArkWeb 多批 *arkwebxts 待补对比、新批黄底 vs 旧批。
  触发：查 XTS 覆盖、arkwebxts、C CDK 台账、OH_ArkWeb、loadUrl、台账黄底未找到。
author: "napi_generator"
version: "1.1.0"
---

# XTS 覆盖核对（Excel + lookup + **web 模块台账**）

统一入口：**`xts_coverage_check.py`**（本目录）。**web 相关**默认对照 **`src/test/xts/acts/web`**（lookup 用 **`--subdir web`**）。

在 **OH 工程根**（含 `src/test/xts/acts`）执行；脚本自动解析 `acts` 路径。

依赖：C CDK 台账 / 黄底解析用标准库读 xlsx；**webview-dynamic** 需 `openpyxl`。

---

## 方式一：给 Excel 文件

| `--format` | 适用文件 | 说明 |
|------------|----------|------|
| **`c-cdk`**（默认） | C CDK 台账 `c_*dk_result*.xlsx`，表 **「C用例覆盖度明细」** | **KIT=ArkWeb** 等；接口覆盖=0 ↔ master **acts** |
| **`c-cdk-web`** | 同上 | **web 子系统** 六维度待补 ↔ XTS |
| **`webview`** | **`webview-dynamic.xlsx`** | 缺口解析（补测见 webview-dynamic-coverage） |

```bash
python3 src/napi_generator/src/skills/c-cdk-coverage/xts_coverage_check.py excel \
  /path/to/ledger.xlsx --format c-cdk --scope unsatisfied \
  --kit ArkWeb --oh-root /mnt/vdb/ohos/master
```

**`--scope`（c-cdk）**：`all` | `need_iface` | `unsatisfied`（接口覆盖=0 且 已满足=否）。

---

## 方式二：给接口名 / 符号（web 模块）

```bash
python3 .../xts_coverage_check.py lookup loadUrl PermissionRequest \
  --subdir web --oh-root /mnt/vdb/ohos/master
```

- 检索 **`acts/web`** 下 `it()` / `@tc.name` 与源码引用。
- **`--allow-miss`**：未命中仍 exit 0。

---

## 方式三：web 模块 ArkWeb 台账批次（`*arkwebxts`）

OH 根下目录约定：`20261015arkwebxts/` 等，内含：

| 文件前缀 | 类型 |
|----------|------|
| `c_*dk_result*.xlsx` | C CDK（末 sheet「C用例覆盖度明细」） |
| `arkts_dynamic_sdk_result*.xlsx` | 动态 ArkTS（末 sheet「接口覆盖详情」） |
| `arkts_static_sdk_result*.xlsx` | 静态 ArkTS（同上） |

**筛选（与脚本一致）**：`kit/KIT = ArkWeb`；C CDK 为 `接口覆盖=0` 且 `接口覆盖是否已满足=否`；dynamic/static 为 `是否覆盖≠1` 且 `已满足=否`。

### 3a. 多批待补交集 / 差集

```bash
python3 .../xts_coverage_check.py web-batches --oh-root /mnt/vdb/ohos/master \
  --batch 20261015:20261015arkwebxts \
  --batch 20261028:20261028arkwebxts \
  --md-out /mnt/vdb/ohos/master/arkweb_batches_coverage_compare.md
```

未指定 `--batch` 时默认 **1015 / 1022 / 1026** 三目录。

### 3b. 新批黄底（master 未找到）vs 旧批

```bash
python3 .../xts_coverage_check.py web-yellow \
  --oh-root /mnt/vdb/ohos/master \
  --new-dir 20261028arkwebxts --old-dir 20261015arkwebxts \
  --new-label 1028 --old-label 1015
```

产出：

- **`arkweb_<新>_yellow_vs_<旧>_focus.md`**（推荐）：排除列 **「是否仅检测调用」** 的全列黄底；口径为 **黄底 + 已满足=否**，并与旧批 **待补** 集合对比。
- **`arkweb_<新>_yellow_vs_<旧>.md`**：ArkWeb 任一格黄底的行（行数多，含「是否仅检测调用」列）。

---

## 与其它 Skill 的关系

| Skill | 关系 |
|-------|------|
| **webview-dynamic-coverage** | webview-dynamic **补写 + 编测** |
| **ohxtsstatic / ohxtsdynamic** | 编写 Hypium XTS |
| **ohtest** | `actstest.py` 跑 **acts/web** 套件 |

---

## 触发语（Agent）

- 「web 模块 / ArkWeb 接口 XTS 有没有覆盖」
- 「对比 1028 和 1015 arkwebxts」「黄底是没找到吗」
- 「三批 webxts 待补重复/不重复」
- 「C CDK 台账 / loadUrl / 17100002 有没有用例」（lookup + `--subdir web`）

---

## 文件索引

| 文件 | 作用 |
|------|------|
| **xts_coverage_check.py** | **excel** / **lookup** / **web-batches** / **web-yellow** |
| **compare_arkweb_batches.py** | 多批 ArkWeb 待补对比 |
| **compare_yellow_vs_batch.py** | 黄底 vs 旧批（含 focus 报告） |
| **xts_lookup_lib.py** | lookup 与 `resolve_acts_root` |
| **analyze_c_cdk_*.py** | C CDK / web 六维度 ↔ acts |
