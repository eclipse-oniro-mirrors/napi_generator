---
name: webview-dynamic-coverage
description: >-
  按 webview-dynamic.xlsx 端到端补 Web 动态 ACTS：解析缺口、编写/生成用例、ohbuild 编译、同步 HAP、actstest 多轮跑测、生成 case↔文档报告。
  默认 user37（云服务+OH 监控/白屏）；I–N「否/空」一覆盖点一条 it()。
  触发：webview-dynamic.xlsx、WebView 覆盖白名单、按 Excel 补 ACTS、编测出报告。
author: "napi_generator"
version: "2.0.0"
---

# webview-dynamic 覆盖补测 Skill（编写 → 编译 → 测试 → 报告）

根据 **OpenHarmony 工程根** 的 **`webview-dynamic.xlsx`**，识别 **I–N** 待补覆盖点，在 **`src/test/xts/acts/web`** 按 Hypium 动态 ACTS 范式补测，并完成 **编译、真机跑测、双轮报告**。Agent 执行本任务时 **必须按 §〇 流水线顺序**，不得只做编码不编测。

---

## §〇 一体化流水线（推荐）

在 **OH 根**（含 `webview-dynamic.xlsx`，如 `/mnt/vdb/ohos/master`）下：

```bash
# 全流程（已手改代码时加 --skip-generate）
python3 src/napi_generator/src/skills/webview-dynamic-coverage/run_webview_dynamic_pipeline.py all \
  --oh-root /mnt/vdb/ohos/master \
  --src-dir /mnt/vdb/ohos/master/src \
  --rounds 2 \
  --device 192.168.x.x:8710

# 分步
python3 .../run_webview_dynamic_pipeline.py analyze --scope user37
python3 .../run_webview_dynamic_pipeline.py generate      # 云服务 + OH 骨架（可手改）
python3 .../run_webview_dynamic_pipeline.py mapping
python3 .../run_webview_dynamic_pipeline.py build
python3 .../run_webview_dynamic_pipeline.py sync-haps     # 必做，否则 xdevice 可能装旧 HAP
python3 .../run_webview_dynamic_pipeline.py test --rounds 2
python3 .../run_webview_dynamic_pipeline.py report
```

**产物（skill 目录）**

| 文件 | 含义 |
|------|------|
| `webview_dynamic_tasks.json` | 解析出的待补覆盖点 |
| `webview_dynamic_gaps.md` | 人类可读缺口清单 |
| `webview_dynamic_acts_mapping.json` | 覆盖点 ↔ it() ↔ 套件 |
| `webview_dynamic_test_runs.json` | 各轮 total/passed/failed + report 路径 |
| `webview_dynamic_acts_report.md` | **交付报告**（映射表 + 跑测表） |

**前置**：`pip install openpyxl`；设备 `hdc list targets` 可见；`--src-dir` 指向含 `test/xts/acts/build.sh` 的 **src 根**。

---

## 表格规则（必读）

| 列 | 含义 |
|----|------|
| **D** | 分类（云服务 / OH 等）；**scope=user37** 时取 D=云服务/OH 的 **37 API 块**（非 constructor 红字 30 条，见 `--scope red30`） |
| **I–N** | 接口 / 调用 / 入参 / 参数规格 / 返回值 / 错误码 |

**跳过**：`已覆盖`、`工具检测已覆盖`、`澄清无法覆盖`、`不涉及`  
**必写**：空、`否`  
**一覆盖点一条 `it()`**，禁止一条 it 合并多个 I–N 格。

细节：[reference.md](reference.md)

---

## §1 解析 Excel

```bash
python3 src/napi_generator/src/skills/webview-dynamic-coverage/analyze_webview_dynamic.py \
  webview-dynamic.xlsx \
  --scope user37 \
  --json src/napi_generator/src/skills/webview-dynamic-coverage/webview_dynamic_tasks.json \
  --md src/napi_generator/src/skills/webview-dynamic-coverage/webview_dynamic_gaps.md
```

---

## §2 编写 / 生成用例

### 2.1 生成器（user37 已内置两块）

| 块 | 脚本 | 套件 | 页面 / 测试 |
|----|------|------|-------------|
| 云服务 24 点 | [generate_cloud_webview_acts.py](generate_cloud_webview_acts.py) | `ActsWebNetworkInterceptionDevFourTest` | `WebCustomErrorCode.ets` / `.test.ets` |
| OH 67 点 | [generate_oh_monitored_acts.py](generate_oh_monitored_acts.py) | `ActsWebSystemEventsTest` | `WebMonitoredBlankScreen.ets` / `.test.ets` |

生成后 **必须**：`List.test.ets` 注册 suite、`test_pages.json` 注册页面（OH 块）。

### 2.2 手工补测范式

1. **页面** `entry/src/ohosTest/ets/testability/pages/*.ets` — `Utils.emitEvent` + 按钮触发 API。  
2. **用例** `entry/src/ohosTest/ets/test/*.test.ets` — `@tc.name` / `@tc.number` / `@tc.desc`。  
3. **命名**：云服务 `testWebviewDynamic_{Class}_{Method}_{I|J|...}`；OH `testMonitoredBlank_*`（与 [coverage_naming.py](coverage_naming.py) 一致）。  
4. **相近 API**：在已有 `describe` 内、相关 `it` **之后** 追加。

### 2.3 设备 / SDK 适配

真机 NAPI 未齐时的降级（try/catch、回传 `spec-ok`、MonitoredBlank 与 `onDetectedBlankScreen` 命名差异等）：**必读** [device_adaptation.md](device_adaptation.md)。过不了须在报告 **状态** 列写清原因，禁止静默删点。

---

## §3 编译

```bash
python3 src/napi_generator/src/skills/ohbuild/ohbuild.py build-acts \
  ActsWebNetworkInterceptionDevFourTest,ActsWebSystemEventsTest \
  --src-dir /path/to/src \
  --product-name rk3568
```

- **动态 Web ACTS**：勿设 `OHOS_USE_HVIGOR_STATIC=1`（区别于 **ohxtsstatic**）。

---

## §4 同步 HAP（必做）

```bash
python3 .../run_webview_dynamic_pipeline.py sync-haps --src-dir /path/to/src
```

将 `out/rk3568/suites/haps/*.hap` 复制到 `out/rk3568/suites/acts/acts/testcases/`。

---

## §5 跑测

```bash
python3 src/napi_generator/src/skills/ohtest/actstest.py run ActsWebNetworkInterceptionDevFourTest \
  --src-dir /path/to/src
python3 src/napi_generator/src/skills/ohtest/actstest.py run ActsWebSystemEventsTest \
  --src-dir /path/to/src
```

**门禁**：用户要求「新增 case 都要能过」时，对 **受影响套件整包** 至少跑 **2 轮**（`pipeline test --rounds 2`），新增 it 需全部 Pass；Fail 须对照 `summary_report.html` 与 [device_adaptation.md](device_adaptation.md) 说明。

---

## §6 报告与交付

1. 运行 [generate_acts_report.py](generate_acts_report.py) 或由 `pipeline report` 生成 **`webview_dynamic_acts_report.md`**。  
2. **会话回复**须包含：  
   - §1 映射表摘要（或指向报告路径）；  
   - §2 各套件轮次 **total/passed/failed**；  
   - 未回填 Excel I–N 时注明「ACTS 已覆盖，表内状态待人工更新」。

可选：同步到 GitCode `xts_acts_2623` 时路径前缀为 `web/`；commit message 末尾 **`Signed-off-by: <作者>`** + **`Co-Authored-By: Agent`**（勿用 Cursor 默认 trailer）；单次 commit 建议 **≤2000 行**。

---

## §7 脚本索引

| 文件 | 作用 |
|------|------|
| [analyze_webview_dynamic.py](analyze_webview_dynamic.py) | 解析 xlsx |
| [generate_cloud_webview_acts.py](generate_cloud_webview_acts.py) / [generate_oh_monitored_acts.py](generate_oh_monitored_acts.py) | 代码生成 |
| [coverage_naming.py](coverage_naming.py) / [generate_acts_mapping.py](generate_acts_mapping.py) | it 名与映射 JSON |
| [run_webview_dynamic_pipeline.py](run_webview_dynamic_pipeline.py) | 编排 analyze → report |
| [generate_acts_report.py](generate_acts_report.py) | Markdown 报告 |
| [acts_suite_map.json](acts_suite_map.json) | D 分类 → 套件 / 文件 |
| [device_adaptation.md](device_adaptation.md) | 真机降级说明 |

---

## 相关 Skill

| Skill | 用途 |
|-------|------|
| **ohxtsdynamic** | 动态 ArkUI XTS 范式 |
| **ohbuild** | `build-acts` |
| **ohtest** | `actstest.py` |
| **ohhdc** | 装包、hilog 单用例调试 |

---

## 触发语

`webview-dynamic.xlsx`、按 Excel 补 Web ACTS、D 列 / I–N 覆盖、webview-dynamic 编测报告、user37 云服务 OH MonitoredBlank。
