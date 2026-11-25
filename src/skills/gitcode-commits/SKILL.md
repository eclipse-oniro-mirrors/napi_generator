---
name: gitcode-commits
description: "GitCode branch commit stats for OpenHarmony release branches. Use when users ask how much code each employer merged on OpenHarmony-7.0-Release after a date (e.g. 20260704), xts_acts 7.0 分支各雇主已合入代码量, or repository/commits API employer breakdown. Paginates web-api.gitcode.com repository/commits, attributes openharmony_ci merge commits via MR commits email, sums stats.additions/deletions from commit detail."
author: "Created by user"
created: "2026-08-25"
version: "1.1.0"
---

# GitCode 分支 Commit 统计（gitcode-commits）

统计 GitCode 指定**分支**上、某日期之后**已合入**的 commit：按邮箱域识别雇主（开鸿智谷 / 深开鸿 / 润开鸿 / 软通动力），汇总 **+/- 行数**。

与 **gitcode-mr**（opened MR 待合入）互补；与 **helloworld**（openharmony.cn 社区已合入 PR 排名）数据源不同。

## API

### 列出分支 commit

```
GET https://web-api.gitcode.com/api/v2/projects/openharmony%2Fxts_acts/repository/commits
    ?repoId=openharmony%252Fxts_acts
    &ref_name=OpenHarmony-7.0-Release
    &page={page}&per_page=100
    &since=2026-07-04T00:00:00Z
    &until=
```

- `since`：ISO 8601 UTC（脚本支持 `YYYYMMDD`，如 `20260704`）
- `page_count` 常为 `null`，需按页拉取直到 `content` 为空
- 请求头需浏览器式 `Referer` / `Origin`（见 `gitcode_commits.py`）

### 单 commit 行数（stats，不拉 diff）

```
GET .../repository/commits/{sha}?auth_current_project=true&repoId=openharmony%2Fxts_acts
```

响应字段：

```json
"stats": { "additions": 3, "deletions": 2, "total": 5 }
```

- `additions` = 新增行
- `deletions` = 删除行
- `total` = 变更总行

### CI 合入 commit 归因

分支上大量 commit 由 `openharmony_ci@noreply.gitcode.com` 合入，正文含 `See merge request: ...!42988`。

脚本会：

1. 从 message/title 解析 MR `iid`
2. `GET issuepr/.../merge_requests/{iid}/commits` 取真实作者邮箱
3. 按邮箱域匹配雇主（与 **gitcode-mr** 相同规则）

## 快速使用

在 **napi_generator 仓库根** 执行：

```bash
# 四家雇主：xts_acts @ OpenHarmony-7.0-Release，2026-07-04 起（默认，用 stats）
python src/skills/gitcode-commits/gitcode_commits.py scan-all

# 仅统计 commit 数（不拉 stats，较快）
python src/skills/gitcode-commits/gitcode_commits.py scan-all --commits-only

# JSON
python src/skills/gitcode-commits/gitcode_commits.py scan-all --json

# 单雇主
python src/skills/gitcode-commits/gitcode_commits.py scan --employer 开鸿智谷

# 自定义起始日（YYYYMMDD）
python src/skills/gitcode-commits/gitcode_commits.py scan-all --since 20260704

# 调试：只处理前 50 条
python src/skills/gitcode-commits/gitcode_commits.py scan-all --limit 50
```

## 应用示例与提示词

| 场景 | 命令 | 提示词示例 |
|------|------|------------|
| 7.0 分支四家雇主合入量 | `… scan-all --since 20260704` | 「7.0release 分支 20260704 后各家雇主提交多少代码」 |
| 开鸿智谷已合入行数 | `… scan --employer 开鸿智谷` | 「开鸿智谷在 xts_acts 7.0 分支合入了多少行」 |
| 快速 commit 数 | `… scan-all --commits-only` | 「先看各雇主 commit 数，不要行数」 |

## 内置雇主邮箱域

| 雇主 | 默认邮箱域 |
|------|------------|
| 开鸿智谷 | `talkweb.com.cn` |
| 深开鸿 | `kaihong.com`（精确匹配，不含 `runkaihong.com.cn`） |
| 润开鸿 | `runkaihong.com.cn` |
| 软通动力 | `isoftstone.com` |

## 与 gitcode-mr / helloworld 的区别

| 技能 | 数据源 | 统计对象 |
|------|--------|----------|
| **gitcode-commits**（本技能） | `repository/commits` + diff | **分支上已合入** commit 与行数 |
| **gitcode-mr** | opened MR + MR commits | **待合入** PR 与行数 |
| **helloworld** | openharmony.cn | 社区 PR 排名、雇主贡献趋势 |

## 依赖

- Python 3 + `requests`
- 网络可访问 `web-api.gitcode.com`
- 行数来自 commit 详情 `stats`，仅对命中雇主的 commit 请求；`--commits-only` 可跳过

## 脚本

- `src/skills/gitcode-commits/gitcode_commits.py` — 入口：`scan` / `scan-all`
