# PR 交付闭环（本地验板效力 = 门禁产物）

## 人工流程（接口人视角）

```
本地开发完成 → 提交 PR → 门禁构建产物
  →（可选）下载门禁 HAP 手测 → 测试报告截图贴 PR 描述
```

## Skill / Agent 必须具备的效力

**不依赖**下载门禁包：用**最终提交代码**编出 unsigned → **门禁同签**（`sign_ci_identical`）→ 含全部辅助包 → 全模块板测 → xdevice 汇总截图贴 PR。

本地绿 ⇒ 可认定代码无功能/装包/混签问题（门禁仍跑静态/质量规则）。

## 标准顺序（硬门禁）

1. 用例质量：`CASE-QUALITY.md`  
2. `git commit -sm` + push（**xts-git-commit**；**已进合入的 PR 禁止再推**）  
3. Issue 关联 + PR（**gitcode-pr**）  
4. **本地交付验板**（推送后、或推送前均可；以最终 tip 代码为准）：

```bash
python3 xts_shared/pr_local_verify.py \
  --repo <xts_acts> \
  --from-diff origin/master \
  --out /tmp/pr<N>_verify
# 或显式 --projects ...
```

5. 终端须有 `REPORT_HTML=` + `SCREENSHOT_PNG=`；会话 **Read** 出图  
6. **PATCH PR 描述**写入测试段（模块表 + 绿/红）并附截图路径/图；失败则读 log 修码后重跑 4～6  
7. `start build`（关联已校验且 delay≥60s）  

## 禁止

- 未 `pr_local_verify`（或等价 CI 同签全套）就贴「本地已验证」  
- 混签辅助包；只跑子集 class  
- 测试失败仍触发合入叙事 / 假装绿  
- 对**已合入流程中禁止再推**的 PR 强行 push 用例  
- **更新 PR 描述时误删用户已贴的测试报告图**：改 Summary/覆盖表/Test plan 时 **保留**「## 测试报告」原有 `![](…)`；`describe-report` 只追加本地验板段，勿整段覆盖用户图  
- **门禁 CodeCheck/编译失败时瞎绕过**：不对照同级工程正确配置，却用非常规 `BUILD.gn` 挂接、软断言、注释用例「先绿」；见 **ohos-gate-compliance**「门禁报错修复策略」与 **gitcode-pr** 修码策略  

## 覆盖质量（与 CASE-QUALITY 联动）

交付前过一遍 **API 参数规格硬清单**（长度边界、有效范围、布尔/枚举成对、事件 data、`@tc.desc` 规范化）。接口人多次回捞的缺口集中在这些维度，禁止「功能路径有了就算覆盖完」。  

另见 **CASE-QUALITY「一批需求尽善尽美」**（PR45112 实锤）：

- 需求表逐行对照；「白名单=不涉及」≠ 跳过接口  
- SDK 缺符号 / 需无权限 rely → **先报用户**，更新 SDK 或另起 rely；**禁止静默省略**  
- 权限错误码 201 等须硬断言，禁止只 OR 软堆码  
- 宣称完成前会话输出 **条目×用例** 对照表  
 


## 脚本

| 脚本 | 作用 |
|------|------|
| `sign_ci_identical.py` | 单工程/单 hap 门禁同签 |
| `pack_xdevice_assist_haps.py --resign` | 全 kit CI 同签打包 |
| `pr_local_verify.py` | 发现工程→同签→全测→合并截图 |
| `gitcode_pr_submit.py describe-report` | PATCH PR 描述追加测试结果段 |
