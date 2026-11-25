---
name: ohcert
description: "统计 OpenHarmony 官网测评结果（https://www.openharmony.cn/testResult）的设备/产品数量，按 OS 版本（4.X/5.X/6.X/7.0 等）、OS 类型（轻量/小型/标准系统）、评测类型（模组/开发板、商用设备、发行版）交叉汇总，并把商用设备按产品大类（手机、平板/电脑、智能穿戴、智能家电、视频监控、网络通信、工业控制、能源表计、安防门禁、金融支付、医疗健康、车载交通、商用办公、机器人/无人机等）归类，支持版本/类型/大类/关键词（含 @两轮车 预设）/日期过滤与 JSON、CSV 导出。Use when users ask 测评结果统计、OpenHarmony 认证设备数量、按版本/OS类型/评测类型/产品大类分布、商用设备品类、手机/汽车/两轮车/视频监控等品类数量、细分关键词查找、testResult 数据汇总、导出测评明细。"
author: "Created by user"
created: "2026-11-06"
version: "1.2.0"
---

# OpenHarmony 测评结果统计（ohcert）

抓取 **OpenHarmony 官网测评结果页**（<https://www.openharmony.cn/testResult>）的全量数据，
按 **OS 版本 × OS 类型 × 评测类型** 做交叉统计，并支持过滤与导出。

入口：**`src/skills/ohcert/ohcert.py`**（仅用 Python 标准库，无需安装依赖）。

在 **napi_generator 仓库根** 执行；Windows 下把 `python3` 换成 `python`。

## 数据来源

页面本身是 SPA，数据由接口返回：

```
POST https://www.openharmony.cn/api/website/external/certificationApply/queryList
Content-Type: application/json

{"page":1,"limit":500,
 "certificationType":[0,1,2],
 "systemVersion":[3,4,5,6,"master"],
 "systemType":["轻量系统","小型系统","标准系统"],
 "companyNameList":[],"searchCondition":""}
```

接口公开，**无需登录/Cookie**；`limit` 上限 500，全量 2508 条产品约 6 页。

响应关键字段：

| 层级 | 字段 | 含义 |
|---|---|---|
| body | `total` / `productCount` | 产品数（2508） |
| body | `resultCount` | 测评记录数（2657） |
| body | `companyCount` | 厂商数（743） |
| 产品 | `name` / `companyName` | 产品名 / 厂商 |
| 产品 | `certificationType` | 评测类型：模组/开发板、商用设备、发行版 |
| 产品 | `province` / `city` / `chipModel` / `deviceModel` | 地区、芯片、型号 |
| 产品 | `deviceCertificationList[]` | 该产品的测评记录（可多条） |
| 测评 | `systemVersion` | 如 `OpenHarmony 6.1 LTS` |
| 测评 | `systemType` | 轻量系统 / 小型系统 / 标准系统 |
| 测评 | `approvalTime` | 通过时间 |

## 统计口径

- **产品数**：接口返回的产品条数（页面“2508 个产品”）。
- **测评记录数**：`deviceCertificationList` 展开后的条数（页面“2657 个测评”）。
  一个产品可有多条记录（不同版本/类型），故记录数 ≥ 产品数。
- **评测类型是产品级字段**，同一产品的多条记录共享同一评测类型。
- **版本聚合**：默认按大版本（`6.1 LTS` → `6.1`），`--group exact` 保留原始字符串；
  `master 20220920` 等归入 `master`。

## 产品大类（商用设备）

接口**没有官方品类字段**，`产品大类` 由产品名（权重 10）+ 测评记录 `desc` 描述（权重 1）
按关键词规则推断，无命中归入“其他”。当前共 20 个大类：

> 手机、平板/电脑、智能穿戴、影音娱乐、智能家电、智能家居、教育、环境监测、
> 商用办公、视频监控、网络通信、能源表计、安防门禁、金融支付、医疗健康、
> 车载交通、机器人/无人机、工业控制、行业终端、其他。

口径提醒：

- 官网**没有“整车/汽车”类产品**；“车载交通”主要是车载终端、车机/仪表、两轮车、
  停车/交通信号/高速设备。
- “手机”目前全部是华为 Mate / Pura / Pocket 等机型（`MatePad` 归平板、`MateBook` 归电脑）。
- 大类是**启发式规则**，不是官方数据；实测 1582 个商用产品约 **94%** 能归入具体大类，
  其余约 6% 是型号名过短或长尾品类，落在“其他”。

规则在 `ohcert.py` 顶部，可按需调整：

| 常量 | 作用 |
|---|---|
| `CATEGORY_RULES` | 大类 → 关键词（列表顺序即同分优先级） |
| `DESC_IGNORED` | 描述里过于宽泛、只在产品名生效的词（视频/控制器/报警/wifi 等） |
| `CATEGORY_NAME_ONLY` | 只按产品名判断的大类（手机） |
| `CATEGORY_NEGATIVE` | 排除词（如“洗烘一体机”不算电脑） |

## 细分关键词查找

大类不够细时（如“两轮车”“储能”“充电桩”），用 `--keyword` 直接搜**产品名 + 描述**：

```bash
# 两轮车：先限定大类，再用 @两轮车 预设
python src/skills/ohcert/ohcert.py --cert-type 商用 --category 车载 --keyword "@两轮车"

# 任意关键词，逗号分隔，OR 关系
python src/skills/ohcert/ohcert.py --cert-type 商用 --keyword "储能,充电桩,逆变器"
```

- 关键词为**子串匹配、不区分大小写**；`@两轮车` 展开为
  `两轮车 / 电动自行车 / 电动车 / 二轮车 / 电动二轮车 / 助力车 / 单车 / bike / bicycle / …`。
- 命中后额外打印 **【6】关键词匹配产品**（产品/厂商/大类/型号/OS版本/通过日期）；
  JSON 对应 `keyword_products`，CSV 新增 `desc` 列。
- 关键词可能跨大类带出周边产品（如“电动车”会命中头盔、车棚灭火控制器），
  建议配合 `--category` 收窄。

## 常用命令

| 场景 | 命令 |
|---|---|
| 全量统计（默认按大版本） | `python src/skills/ohcert/ohcert.py` |
| 按原始版本字符串统计，按数量排序 | `python src/skills/ohcert/ohcert.py --group exact --sort count` |
| 只看 6.1 标准系统的商用设备 | `python src/skills/ohcert/ohcert.py --version 6.1 --os-type 标准 --cert-type 商用` |
| 只看商用设备（含大类分布） | `python src/skills/ohcert/ohcert.py --cert-type 商用` |
| 只看手机类 | `python src/skills/ohcert/ohcert.py --category 手机` |
| 只看车载/交通类 | `python src/skills/ohcert/ohcert.py --category 车载` |
| 只看两轮车（预设） | `python src/skills/ohcert/ohcert.py --cert-type 商用 --category 车载 --keyword "@两轮车"` |
| 任意关键词查找 | `python src/skills/ohcert/ohcert.py --cert-type 商用 --keyword "储能,充电桩"` |
| 大类 × 版本组合 | `python src/skills/ohcert/ohcert.py --category 视频监控 --version 6.1` |
| 只看 master | `python src/skills/ohcert/ohcert.py --version master` |
| 按通过日期过滤 | `python src/skills/ohcert/ohcert.py --since 2026-01-01 --until 2026-06-30` |
| 输出 JSON | `python src/skills/ohcert/ohcert.py --json > ohcert.json` |
| 导出明细 CSV | `python src/skills/ohcert/ohcert.py --csv ohcert.csv` |
| 查看抓取进度 | `python src/skills/ohcert/ohcert.py --verbose` |

## 输出内容

默认打印 4 张 Markdown 表；有商用设备记录时追加第 5 张，带 `--keyword` 时再追加第 6 张：

1. **版本 × OS 类型**（含占比）
2. **版本 × 评测类型**
3. **OS 类型 × 评测类型**
4. **评测类型汇总**（产品数 / 产品占比 / 测评记录 / 记录占比）
5. **商用设备大类**（大类 / 产品数 / 测评记录 / 占比，仅统计 `cert_type=商用设备`，按测评记录降序）
6. **关键词匹配产品**（产品 / 厂商 / 大类 / 型号 / OS版本 / 通过日期，仅 `--keyword` 时输出）

JSON 结构（`--json`）：

```json
{
  "totals": {"products": 2508, "products_total": 2508, "records": 2657,
             "records_total": 2657, "companies": 743},
  "by_version": {"6.1": {"total": 370, "os_type": {...}, "cert_type": {...}}},
  "by_os_type": {"轻量系统": 1181, "小型系统": 491, "标准系统": 985},
  "by_cert_type": {"模组/开发板": 802, "商用设备": 1731, "发行版": 124},
  "cross_os_type_cert_type": {"轻量系统": {"模组/开发板": 509, "商用设备": 643, "发行版": 29}},
  "by_category": {"视频监控": 203, "工业控制": 197, "其他": 97},
  "category_products": {"视频监控": 203, "工业控制": 194, "其他": 97},
  "filters": {"keyword": "@两轮车", "keyword_expanded": ["两轮车", "电动自行车", "bike"]},
  "keyword_products": [
    {"name": "NIU AiOS", "company": "北京牛电科技有限责任公司",
     "category": "车载交通", "device_model": "10303292",
     "os_versions": ["OpenHarmony 6.1 LTS"], "approval_dates": ["2026-09-28"]}
  ]
}
```

注意：

- 加了过滤条件时，`products` 是**命中的产品数**，`products_total` 才是全量。
- `by_category` / `category_products` 只统计 `cert_type=商用设备` 的记录/产品。
- `keyword_products` 仅在带 `--keyword` 时非空；CSV 末尾新增 `desc` 列便于核对关键词命中。

## 参数说明

| 参数 | 说明 |
|---|---|
| `--group major\|exact` | 版本聚合方式，默认 `major` |
| `--version` | 版本过滤：`6.1`、`6`、`master`，也支持完整字符串子串 |
| `--os-type` | 子串匹配：`轻量` / `小型` / `标准` |
| `--cert-type` | 子串匹配：`模组` / `商用` / `发行` |
| `--category` | 产品大类过滤，子串匹配：`手机` / `车载` / `视频监控` / `医疗` …（主要对商用设备生效） |
| `--keyword` | 关键词过滤产品名+描述，逗号分隔 OR；支持预设 `@两轮车` |
| `--since` / `--until` | 通过日期范围（含），`YYYY-MM-DD` |
| `--sort version\|count` | 版本排序：版本号降序（默认）/ 数量降序 |
| `--json` | 输出 JSON，不打印表格 |
| `--csv PATH` | 导出测评记录级明细（UTF-8 BOM，Excel 可直接打开） |
| `--limit-per-page` | 每页条数，默认 500（接口上限 500） |
| `--timeout` / `--retries` | 请求超时秒数 / 单页重试次数 |

## 在 Deep Code / Cursor 中启用

- **Cursor / 仓库约定**：技能源码固定在 `src/skills/ohcert/`，读 `SKILL.md` 或直接执行脚本即可。
- **Deep Code**：只扫描 `.deepcode/skills/`、`.agents/skills/` 等目录，首次使用需建目录链接：

```bash
# Windows（仓库根，cmd）
mklink /J .deepcode\skills\ohcert src\skills\ohcert

# Linux / macOS
mkdir -p .deepcode/skills && ln -s ../../src/skills/ohcert .deepcode/skills/ohcert
```

`.deepcode/skills/` 是本地发现目录，**不要提交链接本身**；新会话用 `/skills` 确认出现 `ohcert`。
当前会话的 skill 列表在启动时加载，新增后需重开会话。

## 已知问题与排查

- **抓取数量与接口统计不一致**：脚本会打印 `[warn]`，通常是抓取过程中官网新增了测评；重跑即可。
- **`HTTP 404` 但页面正常**：`/testResult` 是 SPA 路由，服务端返回 404 属正常，接口仍可用；脚本直接打接口，不依赖页面。
- **公司内网/代理**：需能访问 `www.openharmony.cn`；失败时脚本重试 3 次后以退出码 2 结束。
- **版本号新增**：`major_version()` 只识别 `OpenHarmony X.Y`；新格式（如 `OpenHarmony 8.0 Beta`）会归入 `8.0`，无需改动。
- **大类是启发式**：接口没有官方品类字段，规则分类会有误差；型号名过短（如 `LXSFW`、`T468`）容易落到“其他”，可改 `CATEGORY_RULES` 适配。
- **没有“整车/汽车”类**：`车载交通` 只包含车载终端、车机/仪表、两轮车、停车/交通信号等，官网未收录整车。
- **关键词是子串 OR**：多个词用逗号分隔，不支持 AND/正则；未知 `@xxx` 会按字面词处理。
- **无匹配数据**：退出码 1，并提示检查过滤条件。
