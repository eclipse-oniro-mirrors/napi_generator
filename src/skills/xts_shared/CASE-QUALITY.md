# XTS 用例质量铁律（吸取消会话 / 接口人返工）

> 目标：一次做完接口人覆盖清单；无遗漏、无敷衍、无假覆盖；本地绿 = 门禁可合。  
> **实锤**：PR43815 缺口补齐批次（PR45077 等）多次被接口人回捞——参数长度、有效范围、布尔成对、事件 data/枚举未补全。  
> **实锤**：PR45112 Ability 26.1 批次——误读「白名单=不涉及」跳过 `hasBrandColorChanged`；SDK/声明一时对不上时**静默省略**
> `on/offAppProcessStateChange`、`backToCallerAppWithResult`，接口人一眼打回；201 仅 OR 软接受不算覆盖。  
> 下列清单交付前 **逐项勾完** 才可宣称覆盖完成。

## 一批需求尽善尽美（P0 · 禁止静默省略）

一批 xlsx / 「待补充接口」/ Issue 条目 = **一次做完、真实调用、硬断言、可给接口人扫**。不允许「先交一半、以后再说」。

### 红线（违反即未交付）

| 禁止 | 必须 |
|------|------|
| 需求表有行却不进 PR，且**不告知用户** | 每行：已覆盖 / 澄清白名单 / **blocker 已上报** 三选一 |
| 把「入参/返回值/错误码白名单 = 不涉及」读成「整条 API 不做」 | 「不涉及」只免该**维度**；`接口覆盖是否已满足=否` → **仍须调用覆盖** |
| 本地 SDK/d.ts 缺符号 → 直接从范围抹掉 | **立刻反馈用户**：请更新到含该 API 的 SDK（或指明缺哪几个符号）；更新后再补；会话里写清 blocker |
| 缺权限/ACL 就用 `code===201 \|\| …` 软堆码冒充 201 覆盖 | **另起无权限 rely HAP**（或同批 nopermission 测包），`expect(code).assertEqual(201)` |
| **一条 `it` 软 OR / bag 两个及以上错误码**（`code===A \|\| code===B`、`isXxxErr` 多码袋） | **一码一条**：每码独立 `it` + `assertEqual(单码)`；不可复现码勿写入断言集合（PR45112 接口人） |
| 成功路径 `isReturn=true` 后立刻 `expect(isReturn).assertTrue()` | 断言业务字段（如 `resultCode`）；无 caller 场景直接硬断言文档码（如 16000074） |
| `typeof fn === 'function'` / 只读到 `undefined` 当唯一证据 | **真实调用** + 结果/错误码/字段值硬断言；可选属性 true/false/unset 成对 |
| 宣称「本批完成」却无对照表 | 交付前给用户 **条目×用例** 对照（见下） |

### 需求表读法（xlsx / md）

1. 以 **方法名/接口名** 为行主键；`接口覆盖是否已满足=否` → 本批必须有调用点。  
2. 「入参覆盖白名单 / 返回值覆盖白名单 / 错误码覆盖白名单 = **不涉及**」≠ 跳过该接口；仅表示该维度不做矩阵。  
3. TypeAlias / Interface：至少经真实入参或回调字段断言（如 `FocusedApplicationInfo.focusedBundleName`）；禁止只 import 类型。  
4. 文档错误码：优先 **可复现硬断言**；环境分叉才允许有限 `\|\|`，且 `@tc.desc` 写清每码语义；**权限类 201 必须走无权限 HAP**。

### SDK / Rely / 环境（先报后做）

```
本地编不过 / d.ts 无符号
  → 停；回复用户：「以下 N 条缺声明，请更新 SDK 至 … 后再覆盖」列出符号
  → 禁止假装「不涉及」或从 PR 范围删除

需要 RUNNING_STATE_OBSERVER / START_ABILITIES_FROM_BACKGROUND 等才能过正向路径
  → 正向工程保留权限；201 另起 acts*nopermissionrely（无 requestPermissions、独立 bundle+p7b）
  → 禁止只在有权限工程里 OR 接受 201

需要跨 Ability / forResult / 后台才能逼出的码
  → 按仓内既有 rely 范式做（EntryAbility + CommonEvent / Dummy 占前台等）
  → 禁止因「不好测」删用例
```

### 真实调用 vs 软覆盖

| 软覆盖（禁） | 真实覆盖（要） |
|--------------|----------------|
| `expect(typeof ctx.xxx).assertEqual('function')` 收工 | `await ctx.xxx(...)` + success 或文档码 |
| 错误码一长串 `\|\|` 且从不单独逼出权限码 | 无权限 rely 上 `assertEqual(201)` |
| 可选 boolean 只断言 `undefined \|\| typeof==='boolean'` | 字面量 true/false/unset + 实机 config 读 |
| null 测了、undefined 漏了（或反之） | 异常参 **null 与 undefined 成对** |
| `@tc.desc` 写「documented BusinessError」 | desc 点名 `201/16000050/…` 并与断言集合一致 |

### 交付前强制对用户输出（对照表）

宣称本批完成前，回复中须有表（可简）：

| # | 接口/字段 | 工程 | 用例号 | 真实调用 | 硬断言 | 备注 |
|---|-----------|------|--------|----------|--------|------|
| … | … | … | … | 是 | 是/错误码 | blocker 则写「待 SDK」且**已告知用户** |

有任一行只能填「省略」且未获用户书面确认 → **不得 push / 不得写测试通过**。

## 覆盖与清单

1. **接口人条目逐条落地**：PR 描述写清「已补充 / 澄清」；禁止只改一半 API。  
2. **List.test 全量入口**：同 HAP 旧套件 + 新套件一并注册；交付验板 **禁** `-s class` 只跑新 class。  
3. **辅助包 / Test.json**：AppInstallKit 列全（SyncTest+Assist+AssistOne / Main+Test+Rely）；本地用 `pr_local_verify` 或 `pack --resign`（CI 同签）。  

## API 参数规格硬清单（防遗漏 · P0）

每个被测 API / 关键字段，交付前按表自检；缺一格 = 未完成。PR 描述「覆盖对照」须能指到用例号。

| 维度 | 必须覆盖 | 反例（接口人常打回） |
|------|----------|----------------------|
| **字符串长度** | 空串；最短合法（常 length=1）；规格上限；上限+1 / 典型过长 | 只测「随便一个非空」；`@tc.desc` 不写 length |
| **有效范围** | 合法值；越界；类型外（null/undefined，若 API 可达） | desc 写「异常」但不写范围语义 |
| **布尔 / 枚举** | **true 与 false 成对**；枚举各取值至少一条可达路径 | 只测默认 false；`ToolEventType` 只盖一种 |
| **对象字段** | 关键可选字段显式 true/false 或有/无 | PixelMap `isStrideAlignment` 只间接碰到一次 |
| **回调 / 事件 data** | 事件类型 + payload/`data` 形状有断言 | 只注册监听不验 `data` |
| **错误码** | 规格码 + 板测实码；分叉用 `\|\|` 写清 | `expect(true)` 垫过 |
| **`@tc.desc` 规范化** | `接口名: 参数=… length=/range …; expect code…` | 「参数不规范」「异常」等空话 |

**Ability / System API 高频对照（PR45077 实锤）**

- `createModuleContextSync(moduleName)`：length=0 / 1 / 过长（如 256）+ null/undefined  
- `clearSession(sessionId)`：非空最短 + 过长  
- `sendMessage(message)`：API 上限（如 10240）与上限+1  
- `setAbilityInstanceInfo` + PixelMap：`isStrideAlignment===false` 与 `===true`（如 DMA Allocator）成对  
- `CliToolEvent`：`ToolEventType` 各枚举 + `data` 路径  

## 断言与错误码

4. **禁恒真断言**（`expect(true).assertTrue()` 等门禁会打）。  
5. **错误码跟真机**：NoPerm / ACL 以板测实际 code 为准；板型分叉可 `24010001 \|\| 24010002`，勿写死过时码。  
6. **BusinessError**：优先 `err?.code`，勿盲目 `as BusinessError` 后访问不存在字段。  

## ArkTS / API 真源

7. **SDK 真字段**：如 `ApplicationInfo` 用 `name` 非 `bundleName`；编不过先查 d.ts，勿猜。  
8. **TicketParams 等类型缺失**：本地 SDK 缺类型时用本地 interface，勿假调用。  
9. **TCNUMBER ≥ 5 段**；`@tc.*` 文档字段按仓惯例；**业务旁不新增中文注释**。  

## 签名、辅助包与跑测通路（完整）

10. **p7b**：新建工程用 `gen-xts-signature-p7b.sh`，禁拷模板 p7b。  
11. **交付验板签名**：仅 `sign_ci_identical`（dist + 工程 `openharmony_sx.p7b`）；禁 hapbuild autosign 当交付。  
12. **编签后 freshness**：改码必重编重签再测（`local-hap-fresh` 门禁）。  
13. **Test.json 全套 kit 再测**：有 Assist/Rely 时 **必须** CI 同签后与主测包一并安装再「设备 unittest」；**禁止**只装 ohosTest 后把「Invalid moduleName / 缺 feature」写成用例失败或产品问题。  
14. **门禁产物缺 Assist**：用 `pack_xdevice_assist_haps.py <工程> --resign` 打出同签 zip（可再拆 assist-only）给手测；**禁止** hapbuild 签 Assist 混门禁 SyncTest（9568332）。  

## 假绿信号（一票否决）

| 假绿 | 正确 |
|------|------|
| 只跑新 class / 过滤套件 | 全 List / 全 module |
| 旧 HAP / 无 stamp | 改码→编签→stamp→装包 |
| Assist 本地签 + 门禁主包混装 | CI 同签全套 |
| 未跑板就写「测试通过」 | `failures=0` 且 `unavailable=0` + 截图 |
| 覆盖清单口头「差不多」 | PR 描述逐条已补充 + 会话对照表 |
| 缺 Assist 导致 Error 当「用例红」汇报 | 先补全 kit 再下结论 |
| 布尔/枚举/长度只盖一侧 | 按上表成对/边界补齐 |
| 需求表有行却静默不写用例 | 覆盖 / 澄清 / **已报 blocker**；禁私自砍范围 |
| 「白名单不涉及」当整接口跳过 | 只免该维度；接口调用仍要做 |
| SDK 旧 → 省略 API | 先请用户更新 SDK，再补全 |
| 201 仅 OR 软接受 | 无权限 rely + `assertEqual(201)` |

## 关联

- 签名与 kit：`XDEVICE-ASSIST-HAPS.md`、`sign_ci_identical.py`、`pack_xdevice_assist_haps.py`  
- 验板交付：`PR-DELIVER.md`、`pr_local_verify.py`  
- 门禁：`ohos-gate-compliance`  
