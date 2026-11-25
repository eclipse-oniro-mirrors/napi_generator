---
name: gitcode-mr
description: "GitCode merge request stats for OpenHarmony repos, with employer identification by commit email domain and a Co-Authored-By: Agent trailer check. Use when users ask how many open/pending/merged PRs (MRs) on xts_acts or other GitCode projects, 开鸿智谷/深开鸿/润开鸿/软通动力 PR, employer email-domain filtering, pending-merge code line counts, or whether a PR's commits include `Co-Authored-By: Agent` (AI 协作标记 / Agent 共创). Workflow via web-api.gitcode.com issuepr: list MRs (opened/merged/created), parse iid from web_url, fetch MR commits, match employer by author/committer email domain (开鸿智谷=talkweb.com.cn, 深开鸿=kaihong.com), sum added_lines/removed_lines, and flag each MR as 任一/全部 commits containing Co-Authored-By: Agent."
author: "Created by user"
created: "2026-08-20"
version: "1.1.0"
---

# GitCode Open MR 统计（gitcode-mr）

统计 GitCode 上 **opened** 状态的 Merge Request：按 commit 邮箱域识别雇主（如 **开鸿智谷 = `talkweb.com.cn`**），汇总 **待合入代码行数**。

## 三步 API 流程

### 第一步：列出 opened MR

```
GET https://web-api.gitcode.com/issuepr/api/v1/projects/openharmony%2Fxts_acts/isource/merge_requests
    ?sort=desc&order_by=created_at&scope=all&state=opened
    &page={page}&repoId=openharmony%2Fxts_acts&per_page=10&view=basic
```

请求头需带浏览器式 `Referer` / `Origin`（见 `gitcode_mr.py` 内 `BROWSER_HEADERS`），否则可能返回 418。

响应字段：
- `content[]`：MR 列表
- `total` / `page_count`：分页
- 每条 MR：`iid`、`web_url`、`title`、`added_lines`、`removed_lines`

### 第二步：解析 PR 号（iid）

从 `web_url` 提取 MR 编号，例如：

```
"web_url": "https://gitcode.com/openharmony/xts_acts/merge_requests/42950"
→ iid = 42950
```

也可直接使用响应里的 `iid` 字段。

### 第三步：查 MR commits，按邮箱识别雇主

```
GET https://web-api.gitcode.com/issuepr/api/v1/projects/openharmony%2Fxts_acts/merge_requests/{iid}/commits
    ?repoId=openharmony%2Fxts_acts&iid={iid}&page=1&per_page=10
```

遍历 `content[]` 中每条 commit 的 `author_email` / `committer_email`：

| 邮箱示例 | 雇主 |
|----------|------|
| `ouzhibo@talkweb.com.cn` | **开鸿智谷**（`talkweb.com.cn`） |
| `dongwei@kaihong.com` | **深开鸿**（`kaihong.com`，**不含** `runkaihong.com.cn`） |

邮箱匹配为**域名精确匹配**（`@kaihong.com` 或 `*.kaihong.com`），不会把 `runkaihong.com.cn` 误判为 `kaihong.com`。

若 MR 的任一 commit 邮箱命中目标域，则该 MR 计入该雇主 **opened PR**；**待合入代码量** = 该 MR 的 `added_lines + removed_lines`（来自第一步 MR 列表响应）。

## Co-Authored-By: Agent 协作标记判断

每个命中的 MR 都会检查其**全部 commit** 的提交信息，判断是否带 `Co-Authored-By: Agent` trailer：

- 匹配规则：trailer 名 `Co-Authored-By` 不区分大小写；值里只要包含 `agent` 即命中，
  如 `Co-Authored-By: Agent`、`Co-Authored-By: Agent <noreply@example.com>`；
  容忍 CRLF 与前后空白。`Co-Authored-By: Claude`、具体人名（如 `Co-Authored-By: Wang Wu <w@kaihong.com>`）不算命中。
- 判定两个口径，**分列输出**：
  - **Agent任一**：该 MR 至少 1 个 commit 命中 → `是 n/m`（n=命中数，m=该 MR 总 commit 数），否则 `否 0/m`；
  - **Agent全部**：该 MR 全部 commit 都命中 → `是 m/m`，否则 `否 n/m`。
- 输出位置：`scan` / `scan-all` / `scan-created` / `scan-merged` / `scan-merged-all` 的
  Markdown 明细表新增 `Agent任一` / `Agent全部` 两列并给出汇总行；JSON 明细每条 MR 新增
  `agent_coauthor_any` / `agent_coauthor_all` / `agent_coauthor_matched` / `commit_total`，
  根级新增 `mr_with_agent_any` / `mr_with_agent_all`；`gitcode_mr_report.py` 报告每个分节表与汇总表同样新增这两列。

> 接口字段：commits 响应中 commit 的完整提交信息在 `message` 字段；`co_authors` 字段当前恒为空，仅作兜底解析。

## 快速使用

在 **napi_generator 仓库根** 执行：

```bash
# 开鸿智谷 × xts_acts opened MR + 待合入行数（默认）
python src/skills/gitcode-mr/gitcode_mr.py scan

# JSON 输出（含 MR 列表）
python src/skills/gitcode-mr/gitcode_mr.py scan --json

# 深开鸿（kaihong.com）
python src/skills/gitcode-mr/gitcode_mr.py scan --employer 深开鸿

# 其他仓库
python src/skills/gitcode-mr/gitcode_mr.py scan --project openharmony/xts_acts

# 自定义邮箱域
python src/skills/gitcode-mr/gitcode_mr.py scan --employer 开鸿智谷 --domain talkweb.com.cn
```

## 应用示例与提示词

| 场景 | 命令 | 提示词示例 |
|------|------|------------|
| 开鸿智谷待合入 PR | `python src/skills/gitcode-mr/gitcode_mr.py scan` | 「xts_acts 开鸿智谷还有多少 open PR」 |
| 待合入代码行数 | 同上 | 「开鸿智谷在 xts_acts 待合入多少行代码」 |
| JSON 明细 | `… scan --json` | 「列出开鸿智谷 opened MR 明细」 |
| 深开鸿 | `… scan --employer 深开鸿` | 「深开鸿 xts_acts open PR 统计」 |

## 输出说明

Markdown 模式示例：

```
仓库: openharmony/xts_acts
雇主: 开鸿智谷（邮箱域: talkweb.com.cn）
GitCode opened MR 总数: 250
开鸿智谷 待合入 MR 数: 43
待合入代码量: +1,582,156 / -24,738（变更 1,606,894 行）
含 Co-Authored-By: Agent: 任一 30 个 / 全部 25 个
```

随后是明细表，含 `Agent任一` / `Agent全部` 两列（值形如 `是 3/3`、`否 17/18`）：

### 第四步（可选）：查 MR 主要变更目录

```
GET https://web-api.gitcode.com/issuepr/api/v1/projects/openharmony%2Fxts_acts/merge_requests/{iid}/changes_trees
    ?repoId=openharmony%2Fxts_acts&iid={iid}&view=simple&ignore_whitespace_change=false
```

响应 `tree[]` 中每个节点含 `file_path`（如 `commonlibrary/ets_utils/...`），按路径前缀聚合即可得到主要提交目录。

```bash
# 四家雇主 + 主要目录（depth=2，如 commonlibrary/ets_utils）
python src/skills/gitcode-mr/gitcode_mr.py scan-all
python src/skills/gitcode-mr/gitcode_mr.py scan-all --path-depth 1 --json
```

### 第五步：已合入 MR（按 merged_at 时间范围）

```
GET .../isource/merge_requests?state=merged&order_by=merged_at&sort=desc
```

按 `merged_at` 过滤时间范围，再查 MR commits 按邮箱域识别雇主（规则同 opened）。

```bash
# 深开鸿 × xts_acts 上周合入 MR
python src/skills/gitcode-mr/gitcode_mr.py scan-merged --employer 深开鸿 --last-week

# 指定日期范围
python src/skills/gitcode-mr/gitcode_mr.py scan-merged --employer 深开鸿 --since 20260825 --until 20260831

# 四家雇主上周合入汇总
python src/skills/gitcode-mr/gitcode_mr.py scan-merged-all --last-week --json
```

### Markdown 报告（含链接、+/- 行数、新增用例）

```bash
# 上周深开鸿 xts_acts 完整报告 → MD 文件
python src/skills/gitcode-mr/gitcode_mr_report.py \
  --employer 深开鸿 --since 20260825 --until 20260831

# 或 --last-week；默认输出到 src/skills/gitcode-mr/reports/
python src/skills/gitcode-mr/gitcode_mr_report.py --employer 深开鸿 --last-week \
  --out src/skills/gitcode-mr/reports/report.md
```

## 内置雇主邮箱域

| 雇主 | 默认邮箱域 |
|------|------------|
| 开鸿智谷 | `talkweb.com.cn` |
| 深开鸿 | `kaihong.com`（精确匹配，不含 `runkaihong.com.cn`） |
| 润开鸿 | `runkaihong.com.cn` |
| 软通动力 | `isoftstone.com` |

未知雇主请 `--domain` 指定；可重复 `--domain` 追加。

## 与 helloworld 的区别

| 技能 | 数据源 | 适用 |
|------|--------|------|
| **gitcode-mr**（本技能） | GitCode **web-api** opened MR + commits | **open 状态 PR**、按 commit 邮箱分雇主、**待合入行数** |
| **helloworld** | openharmony.cn 社区统计 API | 已合入 PR 数、雇主贡献排名、提交详情 |

## 依赖

- Python 3 + `requests`（`pip install requests`）
- 网络可访问 `web-api.gitcode.com`

## 脚本

- `src/skills/gitcode-mr/gitcode_mr.py` — 入口：`scan` / `scan-all` / `scan-created` / `scan-merged` / `scan-merged-all`
- `src/skills/gitcode-mr/gitcode_mr_report.py` — 生成 Markdown 报告（默认写入 `src/skills/gitcode-mr/reports/`）
