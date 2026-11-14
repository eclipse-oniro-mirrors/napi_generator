# 一次高质量交付（硬门禁 · PR45280 实锤）

> 目标：**开发 → 编签 → 板测 → PR 描述（六维表+截图）→ start build** 按「接口人可扫、一次合入」做完。  
> **禁止**：漫不经心试错合入、擅自澄清漏盖、反复踩已文档化的坑。

## 铁律（违反 = 未交付）

| # | 铁律 | 说明 |
|---|------|------|
| 1 | **一次交付心态** | 每个 PR 按「门禁一次绿 + 产物板测一次绿」设计；不为「先推再修」留缺口 |
| 2 | **六维表进 PR 描述** | 调用/入参/参数规格/返回值/错误码/权限（或 API1.2 四类+错误码/权限）**表格贴在 PR body**；接口人打开 PR 即能扫 |
| 3 | **验板截图进 PR** | `summary_top.png` / 正式报告图；`failures=0` 且 `disabled=0`/`unavailable=0` |
| 4 | **禁擅自澄清/漏盖** | 需求表有行却覆盖不了 → **先问用户**选：继续硬测 / 双码过渡 / 书面澄清；**禁止**未确认就删套件或从 PR 表抹掉 |
| 5 | **禁假覆盖** | soft-OR 袋、裸数字冒充枚举覆盖、`typeof fn`、静默省略 → 见 `CASE-QUALITY.md` |
| 6 | **旧坑零复发** | `compileSdk`/`testcase-timeout`/hypium 包名等已进门禁的问题，提交前必须过 `gate_check`；再犯视为流程失败 |
| 7 | **根因对症、有把握再改** | 门禁一轮（编译→产物→下载验板）成本极高。修任何失败/挂死/BLOCKED：**先读 log 钉死卡点与机制**，再改执行路径；**禁止**无证据的加 timeout/加 sleep/软 OR/重试碰运气、先推再看 |

## 修 bug 强制顺序（对已发生问题 · 禁止碰运气）

```
1. 用 module_run / hilog / 用例日志定位：停在哪条用例、哪次 await/API、done 是否可达
2. 写明根因一句话（机制，不是「再等等就好」）
3. 最小对症改动；改前能解释「为何此改必然打断该失败模式」
4. 本地/同签验板证明；再 push / start build
禁止首手：抬 shell-timeout/testcase-timeout、盲目 sleep、放宽断言、删用例、软 OR 袋
超时/时长仅允许在根因已修、且有证据证明「业务窗口本身不够」时调整
```

## 提交 PR 前强制顺序

```
1. 需求表逐行 → 会话输出 条目×用例 对照（CASE-QUALITY）
2. 实现：真实调用 + 枚举/文档错误码硬断言（201 优先独立 noperm）
3. 新建工程：build-profile.compileSdkVersion = 当前 api_full（现 "26.1.0"）
   ← 抄同目录已绿 peer，禁止手写 26.0.0/26.0.1
4. Test.json：testcase-timeout≥30000；shell-timeout 勿小于整套 aa test 需要
5. gate_check.py code <工程> --fix --strict
6. 编签 + freshness + 全模块板测（禁 -s class 当交付绿）
7. 建/更 PR：body 含 六维表 + 测试报告截图 + Issue 链接
8. delay≥60s → start build；未合入则用 **gitcode-pr** `pr_delivery_track.py`
   （默认 15min：编译/CodeCheck→拉 log 修；仅冒烟→rebuild；绿→静态 `fetch-static-haps` 板测贴图）直至合入
```

## 板测挂死防呆（PR45280 / #45399 MoveAbility 0200 实锤）

| 现象 | 根因 | 防呆 |
|------|------|------|
| 上条 PASSED，下条卡满 shell-timeout（如 600s），后续大量 BLOCKED | `async (done)` 路径未调用 `done()`；或 `await terminateSelf`/`moveAbilityToBackground`/`aa start` 永不 settle；或 fire-and-forget `.then` 竞态 | 二次调用类用例：**串行**；`terminateSelf`/`moveAbility*`/`executeShellCommand(aa start)` **有上限轮询**（`.then`+`shell sleep`，**禁止**裸 `await api()`）；**finally 必 `done()`** |
| 门禁 HAP 仍挂、已有 finally/done | **仅包住 host 不够**：`await context.moveAbilityToBackground()` 永不 settle 时，`try` 到不了 `finally`，`done()` 仍不跑（#45399 门禁产物复现） | API 调用一律 `moveOnceBounded` 式：启动 Promise → 轮询 settled → 超时返回错误码，**不 await 裸 Promise** |
| 静态 `setTimeout(resolve, ms)` 编不过 | `COMPILE.SETTIMEOUT.01`（ESE0046） | 改箭头回调 `setTimeout((): void => { resolve(); }, ms)`；**EventBus onWait 必须 setTimeout 墙钟**，禁 shell sleep 冒充超时（PR45421） |
| OnApplication / LifeCycle 很快 timeout | `AbilityDelegator sleep` 几乎立即返回 | 对照动态 `EventBus`；hilog 核 `onWait`→`emit` 墙钟 |


## 错误码 / 201 决策树（须问用户）

```
板端可能 201 被 801 掩盖（能力校验优先）？
  ├─ 用户要「先合入再收紧」→ 枚举双通（PERMISSION_DENIED|NOT_SUPPORTED）+ hilog 实码
  ├─ 用户要「硬 201」→ 无权限 HAP + 空 ACL；若 dayu200 仍 801 → 报 blocker，等 2in1/策略
  └─ 用户书面确认「本批澄清不盖 201」→ 对照表写澄清理由；禁私自删
禁止：Agent 自行判定「无法覆盖」并卸注册/删工程且不告知
```

## compileSdk 防呆（为何反复错）

| 错因 | 防呆 |
|------|------|
| 模板/旧工程仍是 26.0.0 | 门禁 **CI.SDK.01** 现要求 **恰好 `"26.1.0"`**；`--fix` 自动改 |
| 本地临时改数字忘恢复 | staged 扫描 + peer 抄写 |
| skill 文档仍写旧版本 | 以 `config_checker._API_FULL_VERSION` 为准，改版本只改这一处 |

## PR 描述最小骨架

```markdown
## Summary
…

## 六维/覆盖对照
| API | 调用 | 入参 | 规格 | 返回值 | 错误码 | 权限 | 工程/用例 | 备注 |
| … |

## 测试报告
![summary](…summary_top.png)
failures=0 …

## Test plan
- [x] compileSdk=api_full；testcase-timeout≥30000
- [x] 全模块板测；无 soft-OR/假覆盖
- [x] 澄清项均已获用户确认
```

## 关联

- `CASE-QUALITY.md` · `PR-DELIVER.md` · `gitcode-pr/SKILL.md` · `ohos-gate-compliance` CI.SDK.01 / TESTCASE_TIMEOUT.01  
- 实锤：PR45280（compileSdk 26.0.0、noperm 5s beforeAll、201 擅自澄清）
