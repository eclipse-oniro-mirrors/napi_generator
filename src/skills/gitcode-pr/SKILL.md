---
name: gitcode-pr
description: >-
  gitcode 平台 PR 提交一体化：创建 issue、创建 PR、PR 描述内嵌 issue 链接自动关联、
  评论 start build 触发门禁（含 1 分钟等待）；本地 CI 同签验板 + 汇总截图写入 PR 描述；
  **一次交付**：PR body 须含六维/覆盖对照表 + 验板截图；禁止未问用户就澄清漏盖；
  PR 未合入前持续跟进门禁（默认 15 分钟轮询、下载编译/CodeCheck log、分析修复、再 start build；
  仅冒烟失败自动 rebuild；静态可拉 dayu200_xts_static version→testcases 验板）。
  触发词：创建 PR、提交 PR、关联 issue、start build、触发门禁、建 PR、验板截图、贴报告、
  跟进门禁、门禁轮询、编译失败、拉取 build.log、六维表、一次交付、pr_delivery_track。
version: "1.3.0"
---

# gitcode PR 提交一体化（issue 创建 / 关联 / 触发构建 / 验板截图）

> **适用范围**：OpenHarmony XTS（xts_acts）及任意 gitcode 托管仓库的 PR 提交流程。
> 配合 `xts-git-commit` + **`xts_shared/PR-DELIVER.md`**：  
> **本地最终代码 → CI 同签全套板测 → 截图贴 PR → Issue/start build**。  
> 本地绿效力 ≈ 下载门禁产物手测（签名用 dist + 工程 p7b，禁自造证书）。

## 三条铁律（2026-09 实锤，违反即构建失败/无法关联）

| # | 规则 | 说明 |
|---|------|------|
| **1** | **PR 必须关联 Issue** | gitcode CI 拒绝无关联 issue 的构建：`The PR is not associated with any Issue` |
| **2** | **关联靠 PR 描述内嵌 issue 链接** | 创建 PR 时在描述写入 `https://gitcode.com/{owner}/{repo}/issues/{号}` 即自动关联；**禁止**只靠 `POST /pulls/{n}/issues`（各种 body 均 400） |
| **3** | **触发 start build 前等 1 分钟** | 提交改动 / 补关联后过 1 分钟再评论 `start build`，勿过早触发 |

## 交付铁律（2026-10-31，反混签 / 反假绿）

| # | 规则 | 说明 |
|---|------|------|
| **4** | **本地验板 = 门禁同签** | `sign_ci_identical` / `pr_local_verify`；**禁** hapbuild autosign 辅助包混门禁主包 |
| **5** | **全套 kit + 全模块 aa test** | Test.json 全部 HAP；**禁** `-s class` 当交付绿 |
| **6** | **PR 描述贴汇总截图** | `summary_top.png`；失败读 log 修到绿再贴；已合入禁推的 PR 不再改码 |

**标准顺序（硬门禁）**：  
用例质量（**CASE-QUALITY**）→ `git commit -sm` → push → Issue → 建/链 PR →  
**`pr_local_verify`（CI 同签）→ Read 截图 → `describe-report` 写入 PR 描述** →  
验证关联 → 等 60s → `start build`。

## 一键命令（推荐入口）

```bash
python3 scripts/gitcode_pr_submit.py all \
  --issue-title "[新需求]: xxx ts→ets 迁移与 3.2 SDK 适配" \
  --issue-body-file issue.md \
  --pr-title "test(ability): xxx；Co-authored-by: Agent" \
  --head "nicklaus0602:req2-submit-02" --base master \
  --pr-body-file body.md \
  --build                 # 建完自动等 60s 触发 start build；不带则只建 PR
```

输出三连确认：`✅ Issue 已创建` → `✅ PR 已创建` → `✅ PR n 已关联 Issue m（自动关联验证通过）`。

## 分步命令

```bash
# ① 建 issue（输出 issue 号；已有 issue 可跳过）
python3 scripts/gitcode_pr_submit.py issue \
  --title "[新需求]: xxx" --body-file issue.md

# ② 建 PR 并自动关联（描述缺链接时脚本自动追加）
python3 scripts/gitcode_pr_submit.py pr \
  --title "test(ability): xxx；Co-authored-by: Agent" \
  --head "nicklaus0602:req2-submit-02" --base master \
  --body-file body.md --issue 32243

# ②b 已有 PR 未关联：PATCH 描述追加链接（无需重建 PR）
python3 scripts/gitcode_pr_submit.py link 43950 --issue 32638

# ②c 本地 CI 同签全套板测（最终 tip 代码；效力≈下载门禁产物）
python3 ../xts_shared/pr_local_verify.py \
  --repo /path/xts_acts --from-diff origin/master \
  --out /tmp/pr_verify_out
# 终端须有 REPORT_HTML= / SCREENSHOT_PNG=；Agent Read 出图

# ②d 把验板结果写入 PR 描述（贴截图路径；失败禁写绿）
python3 scripts/gitcode_pr_submit.py describe-report <PR号> \
  --screenshot /tmp/pr_verify_out/summary_top.png \
  --report-html /tmp/pr_verify_out/summary_report.html \
  --summary "N modules failures=0 unavailable=0"

# ③ 触发门禁（默认 sleep 60s；--delay 0 立即）
python3 scripts/gitcode_pr_submit.py build 43128

# ④ PR 未合入：门禁跟进（推荐 pr_delivery_track，默认 15min）
python3 scripts/pr_delivery_track.py status 45360
python3 scripts/pr_delivery_track.py track 45360 --once --stop-on-fail \
  --out /tmp/pr45360_track --log /tmp/pr45360_track/track.log
# exit 0=合入；1=进行中；2=编译/CodeCheck（已拉 log）；3=仅冒烟（可自动 rebuild）；4=门禁绿待合入/可贴板测
python3 scripts/pr_delivery_track.py fetch-static-haps 45360 \
  --out /tmp/pr45360_static_haps
# 解压出 suites/acts/acts/testcases → bm install / aa test → describe-report 贴截图
python3 scripts/pr_delivery_track.py rebuild 45360

# 兼容旧入口（默认 interval 已改为 900s）
python3 scripts/pr_gate_follow.py watch 45112 --once --auto-fetch --stop-on-fail
```

详述：**`xts_shared/PR-DELIVER.md`**、**`ONE-SHOT-DELIVER.md`**、**`CASE-QUALITY.md`**。

## 门禁跟进闭环（PR 合入前，2026-11 固化；15min / 静态产物）

> 实锤：PR#45112 hypium OhmUrl；PR#45360 AbilityKit 六维/门禁反复与静态本地难编。  
> Agent **不得**在 `start build` 后结束会话；**PR 未合入则持续跟进**；跟踪写入 `track.log`。

| 步骤 | 动作 |
|------|------|
| 1 | push / 修码后 **等 ≥60s** → `build` / `rebuild` |
| 2 | 每隔 **15min** 跑 `pr_delivery_track.py track <PR> --once ...`（或长跑 `track` 不带 `--once`） |
| 3 | exit **2**（编译/CodeCheck）：读 `logs_r*/analyze.json`；按「修码策略」改 → commit push → `rebuild` |
| 4 | exit **3**（**仅冒烟失败**）：脚本默认 **自动 `start build`**；勿当编译失败改业务码 |
| 5 | exit **4**（门禁绿 / `waiting_for_review`）：静态拉 `fetch-static-haps` → 板测 → `describe-report` 贴 xdevice 截图 |
| 6 | exit **0**：合入/关闭，停止；保留 `track.log` 备查 |

### 修码策略（CodeCheck / 编译失败，禁止瞎绕过）

> 实锤：PR#45250 为躲父 `BUILD.gn` 连带编，把套件挂进 `actsabilityamstest`（`../`），合入后仍属错误挂接，须 #45331 纠正。

1. **先对照同级**：同目录已合入工程的 `BUILD.gn` / `module.json5` / `oh-package` / 用例类型写法  
2. **优先改配置到正确形态**（父 group 注册、OhmUrl、SDK `Int`/`valueOf`、ACL）；**不要**发明非常规挂接  
3. **禁止**：无关兄弟 `group` + `"../peer"`、改 hap_name/module-name 糊弄、恒真/软 OR 垫绿、注释掉用例「先绿再说」  
4. 细则与检测：`ohos-gate-compliance`「门禁报错修复策略」+ **CI.BUILDGN.PARENT.01** / **PEER_DOTDOT.01**

**Agent 行为禁令**：只贴「编译失败」链接不下载分析；修完立刻 `start build`（未满 60s）；PR 仍 open 却声称交付结束；**为躲报错破坏同级配置惯例**。

## 要点

- **token**：`~/.gitcode_token`（chmod 600）或环境变量 `GITCODE_TOKEN`；仓库默认 `openharmony/xts_acts`，用 `--owner/--repo` 覆盖
- **title 惯例**：`test(ability): <工程列表> ts→ets 迁移与 SDK 适配；Co-authored-by: Agent`（修复用 `fix(ability): ...`）
- **head 格式**：优先 `nicklaus0602/<fork仓>:<分支>`（如 `nicklaus0602/xts_acts_0615:test/apiCoverage0917-batch`）；部分场景 `nicklaus0602:分支` 亦可
- **PR 描述模板**：背景 / 改动 / **测试情况（含 CI 同签全套 + summary_top 截图）**
- **分支准备**：commit 推送到 fork 后再建 PR（`xts-git-commit` + `ohos-gate-compliance`）；**已合入流程禁再推的 PR 不再改码**
- **验证**：关联校验（`GET pulls/{n}/issues`）+ 本地 `pr_local_verify` 绿才贴报告
- **签名**：交付验板只用 `sign_ci_identical`（dist + 工程 p7b）；**禁** hapbuild autosign 辅助包混门禁主包（9568332）

## 常见问题

| 现象 | 处理 |
|------|------|
| CI 回复 "not associated with any Issue" | PR 描述缺 issue 链接；`link` 子命令或 PATCH 补写链接后**重新评论 start build** |
| 建完 PR 才发现没关联 | `python3 ... link <PR> --issue <号>`（PATCH 描述追加链接即可，无需重建 PR） |
| issue 被合入自动关闭 | 已关闭 issue 不能关联新 PR，需另建 issue |
| Agent 只 push 就评论 start build | **禁止**：必须先确认 `GET pulls/{n}/issues` 非空 |
| 本地装包 9568332 / 与门禁混装失败 | 未用 CI 同签；走 `pr_local_verify` / `pack --resign`（`sign_ci_identical`） |
| 假绿：只跑 `-s class` / 缺 Assist | 交付必须全模块 + Test.json 全套 kit |
| 已合入 PR 还想推修复 | **禁止**；另开 PR；本 skill 只改 skill 仓不改该 PR |
| 更新 PR 描述后用户测试报告图消失 | PATCH 前先拉现有 body；**保留** `## 测试报告` 下用户 `![](…)`；只改 Summary/覆盖表；`describe-report` 仅追加不覆盖 |
| 门禁产物缺 Assist 无法手测 | `pack_xdevice_assist_haps.py <工程> --resign` 出同签 zip（可拆 assist-only） |
| dayu200 `10311002` OhmUrl `@ohos/hypium` | 新建用例改 `from '@ohos/hypium-dynamic'`；与同工程既有 `*.test.ets` 一致 |
| start build 后不管了 | 用 `pr_gate_follow.py watch --once` 半小时跟进直到合入 |
