# webview-dynamic.xlsx 参考

## 文件位置

默认：仓库根 `webview-dynamic.xlsx`。可通过脚本第一个参数覆盖。

## 红字判定（D 列）

- 读取 `xl/styles.xml` 中 **font 颜色 `FFFF0000`** 的 `fontId`。
- 单元格 style → `fontId` 命中则为 **D 列红字行**。
- 仅这些行进入「待补充 API」集合。

## I–N 与覆盖维度

| 列字母 | 列号 | 表头关键词 | 补测设计要点 |
|--------|------|------------|--------------|
| I | 9 | 接口覆盖是否已满足 | API 被 ACTS 触达（import + 调用链） |
| J | 10 | 调用覆盖白名单 | 方法/回调被实际调用 |
| K | 11 | 入参覆盖白名单 | 参数类型、边界、null/undefined |
| L | 12 | 参数规格覆盖白名单 | 规格书约束、非法组合 |
| M | 13 | 返回值覆盖白名单 | 返回值断言 |
| N | 14 | 错误码覆盖白名单 | `BusinessError.code` / 文档错误码 |

## 单元格决策

```
if value in {已覆盖, 工具检测已覆盖, 澄清无法覆盖, 不涉及}:
    skip
elif value == "否" or value == "":
    need_test
else:
    skip  # 其它文本视为已有说明，不自动补测
```

若与业务方规则冲突，以用户当次指令为准。

## 覆盖点 ID

`{类名}.{方法名}#{I|J|K|L|M|N}`

例：`WebviewController.loadUrl#N`

## 在 ACTS 中找已有用例

优先顺序：

1. `rg '{method}|{Class}' src/test/xts/acts/web --glob '*.test.ets'`
2. 同 **subsystem** 下 `web_load` / `web_security_privacy` 等目录
3. 动态：`entry/src/ohosTest/ets/test`；静态：`entry/src/main/src/test`（本 xlsx 名含 dynamic，默认动态）

## 澄清无法覆盖

表格已标「澄清无法覆盖」的维度：**不编写** 新用例；在对照表 **状态** 列记「澄清无法覆盖」，并引用表内原单元格说明。

## scope 参数

| scope | 含义 |
|-------|------|
| **user37**（默认） | D=云服务/OH 的 37 API 块（MonitoredBlank + Scheme/CustomError 等） |
| **red30** | D 列字体为红的 constructor / WebviewController 等约 30 条 |
| **all** | 全表有 class 的行 |

## 套件与文件（user37）

见 [acts_suite_map.json](acts_suite_map.json)。流水线入口：[run_webview_dynamic_pipeline.py](run_webview_dynamic_pipeline.py)、[SKILL.md](SKILL.md) §〇。

## XTS 静态门禁（常见）

| 规则 | 要求 |
|------|------|
| **XTS.CHECK.TCNUMBER.01** | `SUB_<子系统>_<部件>_<测试信息>_<4位数字>`；**`it()` / `@tc.name` / `@tc.number` 三者一致**。例：`SUB_WEB_WEBCUSTOMERRORCODE_DYN_0001`、`SUB_WEB_MONITORED_BLANK_0001`（勿用仅 4 段的 `SUB_WEB_WEBCUSTOMERRORCODE_0001`） |
| **XTS.CHECK.ASSERTION.01** | 每个 `it()` 体内须出现 **`expect(...)`**（不可仅藏在 `Utils.registerEvent` 内）；OH 块在 `waitForExist` 后加 **`expect(isReturn).assertTrue()`** |
