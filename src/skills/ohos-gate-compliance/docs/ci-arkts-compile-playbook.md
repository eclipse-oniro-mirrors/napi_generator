# CI ArkTS 编译失败方案库（xts_acts dayu200）

> 目标：PR 增量编 HAP 一轮过，避免「修一轮又出一轮」。  
> 实锤：req4 MR 43131 / ActsAbilityErrCodeQueryTest（2026-09-04 build.log 21→22）。

## -1. 诊断优先于绕过（硬策略，PR45250/45331）

| 禁止 | 正确 |
|------|------|
| 一报错就改非常规挂接 / 注释用例 / 软断言垫绿 | 先怀疑 **BUILD.gn / oh-package / module.json5 / 类型** 写错 |
| 把新套件挂进无关兄弟 `group`（`../peerSuite`）躲连带编 | 对照同级：挂**父目录** `BUILD.gn` 的 group deps |
| 只消本轮 ERROR、不管惯例与可维护性 | 与已合入 peer 逐项 diff 配置后再改代码 |

流程：读本工程 ERROR → 打开 2～3 个同级绿工程对照 → 按惯例改 → 再编。  
配置类规则：**CI.BUILDGN.PARENT.01**、**CI.BUILDGN.PEER_DOTDOT.01**（见 ohos-gate-compliance）。

## 0. 提交前强制自检（合入 master 后视角）

CI 会对 PR **自动 merge upstream/master** 再编。本地只看分支 tip **不够**。

```bash
# 在 PR 分支上（建议先 merge/rebase upstream/master）
MODS='<本批改动的工程根，可多个>'
# 1) 禁止 as any / as unknown（10605008 arkts-no-any-unknown）
grep -rn 'as unknown\|as any\b\|:\s*unknown\b\|:\s*any\b' $MODS --include='*.ets' | grep -v hypium
# 2) 禁止 function() 表达式（10605046 arkts-no-func-expressions）
grep -rn 'function\s*(' $MODS --include='*.ets' | grep -v hypium | grep -v ': Function'
# 3) 门禁脚本（可自动检出 1+2）
python3 <napi_generator>/src/skills/ohos-gate-compliance/scripts/gate_check.py code <工程> --strict
# 4) hypium 与 oh-package 对齐（OhmUrl）：工程根若已是 @ohos/hypium-dynamic，
#    禁止新增用例仍 import '@ohos/hypium'（43815 HyperSnapGetLastError / GetChildProcessInfos 实锤）
for d in $MODS; do
  if grep -q 'hypium-dynamic' "$d/oh-package.json5" 2>/dev/null; then
    grep -rn "from '@ohos/hypium'" "$d" --include='*.ets' || true
  fi
done
```

有命中必须改干净再 push。本地可用临时 `modelVersion=6.0.2` + `compileSdkVersion: 26` 编 ohosTest 验证（**勿提交**这些临时改动）。

```bash
# 5) 静态 CI：同 it() 内禁止重复声明 const strJson（ESE0351）
# 6) 静态 CI：禁止对非可选返回值写 !== undefined / !== null（W65000 always true）
grep -rn 'const strJson:' $MODS --include='*.ets' | grep -v hypium
grep -rn '!== undefined\|!== null\|=== undefined\|=== null' $MODS --include='*.ets' \
  | grep -v hypium | head
```

## 0.1 静态 W65000 / ESE0351（dayu200_xts_static，MR 44086 实锤）

| CI 现象 | 修复 |
|---------|------|
| `Variable 'strJson' has already been declared`（ESE0351） | 同一 `it()` 内第二次起改名 `strJson2` / `strJsonBtn` |
| `The equality expression is always true`（W65000） | 勿对枚举/方法写 `mode !== undefined`、`fn !== undefined`、`st !== null`；改为枚举成员比较或 `${st}`.length / 成功路径直接 `'ok'` |

| dyn ohpm 静默失败（仅 project dir 无 Error Message） | `ace_ets_module_ui/<proj>` 的 hypium-dynamic 用 `file:../../../../tools/...`（同 modifier）；勿用 `../../../` |
| dyn `aa test` unavailable / 找不到 OpenHarmonyTestRunner | 双 HAP：`Test.json` → `module-name: entry_test`（对齐 ohosTest `name`）；误用 `entry` 会在主包找 Runner 并 jscrash |

读日志：搜 `Error Message:` + 工程路径；hypium 下大量 `ERROR: Warning` 可忽略，**以工程 pages/tests 的 Semantic/W65000 为准**。

## 0.2 static `adaptToHandedness` Double vs enum（dayu200_xts_static，PR45178 实锤）

| CI 现象 | 修复 |
|---------|------|
| `Type 'Double' is not compatible with type 'HandednessFollowMode\|undefined'` | 勿用 `number` 常量塞 `adaptToHandedness`；`import { HandednessFollowMode } from '@ohos.arkui.dialog'` 后用真枚举成员 |

## 0.2b static `clearTimeout` / optional-chaining（dayu200_xts_static，PR45075 实锤）

| CI 现象 | 修复 |
|---------|------|
| `No matching call signature for clearTimeout(Double)` | 定时器句柄用 `int`，勿 `number`（同工程 `EventBus.ets`：`let timeoutId: int = -1`） |
| `Type 'Double' is not compatible with type 'undefined\|Int\|null'` | 同上；`setTimeout` 返回值赋给 `int` |
| `Operand of the optional-chaining expression is always non-nullish` | `if (err) { ... }` 内用 `err.code` / `err.message`，勿 `err?.code` |

## 0.2c static `setTimeout` / EventBus 等待（PR45280 + PR45421 实锤）

| 场景 | 正确做法 | 禁止 |
|------|----------|------|
| `ESE0046`：`setTimeout(resolve, ms)` 直接传参 | `setTimeout((): void => { resolve(0); }, ms)`（同工程 `Util.msSleep`） | `setTimeout(resolve, ms)` / `setTimeout(reject, ms)` |
| **EventBus `onWait` / 生命周期事件等待** | 与**动态同目录工程**对齐：`setTimeout` 墙钟超时 + emit resolve（`timeoutId: int`）；静态 `resolve` 须 1 参：`Promise<int>`+`resolve(0)` 或 `resolve(undefined)` | `executeShellCommand('sleep N')` 冒充超时；`resolve()` 零参（CI：Expected 1 arguments, got 0；PR45421） |
| HyperSnap 等**短间隔轮询**延时 | 可 `executeShellCommand('sleep 0.2')`（PR45280） | 把 shell sleep 当成 EventBus/事件 wait 的唯一超时手段 |

**流程铁律（静态化 / 修挂死）**：

1. 有动态对照工程 → **先打开动态同名 `EventBus` / wait 实现再改静态**，禁止另发明等待机制。
2. 改 `onWait`/超时后 → 用 hilog 核墙钟：`onWait`→`timeout`/`resolve`/`emit` 间隔须接近设定值；对不上禁止宣称已修。

本地门禁：**COMPILE.SETTIMEOUT.01**（仅拦 resolve/reject 直接传参，不拦箭头回调 setTimeout）。

## 0.3 WordsTool.5 vs `enableAbility` Capability（PR44545 实锤）

| CI 现象 | 修复 |
|---------|------|
| WordsTool.5 裸词 `accessibility` | 勿 `import { accessibility }` / `accessibility.Capability` |
| `string[]` 传 `enableAbility` → **10505001** `string[]` not assignable to `Capability[]` | `const CAP: ('retrieve' \| 'gesture')[] = ['retrieve', 'gesture']`（字面量联合，无独立词 accessibility） |

## 1. 异常参 `undefined` 与枚举类型（10605999 ↔ 10605008）

| 写法 | CI 结果 | 说明 |
|------|---------|------|
| `createAreaModeContext(0)` | 能编，但语义错 | `0` 为合法 AreaMode，异常用例走成功路径易超时 |
| `undefined as AreaMode` | **10605999** | undefined 与枚举不重叠，禁止直接断言 |
| `undefined as unknown as AreaMode` | **10605008** | 禁止 unknown（门禁 COMPILE.ANY.01） |
| `createAreaModeContext(undefined)` | **通过** | 与 `CreateDifferentAreaContext` 等现网用例一致 |

**原则**：异常参测 401 时，优先**直接传** `undefined`/`null`（API 允许编译即用）；禁止用 `unknown`/`any` 中转强转。

## 1.1 ts→ets：OpenHarmonyTestRunner / AbilityStage（PR44143/44144 实锤）

| CI 现象 | 修复 |
|---------|------|
| `var x = undefined` → 赋给 AbilityDelegator 报 not assignable to undefined | `let x: AbilityDelegatorRegistry.AbilityDelegator`（勿 `= undefined`） |
| arkts-no-var / arkts-no-any / untyped AbilityMonitor 字面量 | `let` + `BusinessError` + `AbilityMonitor` / `ShellCmdResult` 显式类型 |
| arkts-no-for-in（`translateParamsToString`） | `Object.keys(parameters)` + `for (let key of keys)` |
| `onAcceptWant`/`onContinue` 与基类签名不兼容（曾返回 undefined / any） | 按 SDK：`onAcceptWant(want: Want): string`（空用 `''`）；`onContinue(...): OnContinueResult` |
| FormAbility 无类型字面量 / 非可推断数组 | `interface` + `Want` / `FormProxyItem[]` |

参考已过 CI 的 typed Runner：`sensors/miscdevice_ndk/.../OpenHarmonyTestRunner.ets`。  
`Object.freeze` 等受限 stdlib：**保留 `.ts`**，勿强行 rename 为 `.ets`（44144 freezeHelper）。

| `AsyncCallback<void>` 回调写成 `(err, data: Object)` | **No overload** / not assignable（44143 module1/plugin） | 仅 `(err: BusinessError)` 或 `data: void` |
| 只修 entry、漏 formmodule/moduleN 同构文件 | 下一轮 CI 仍 FAIL（44143 build.log9） | 按工程 **全部** `.ets` 模块扫 `any`/`var=undefined`/`let x={}` |
| `want.parameters.startId` 未判空 | `'want.parameters' is possibly 'undefined'`（44143 formmodule AbilityStage） | 先 `if (want.parameters == undefined \|\| want.parameters.startId == undefined) return ''` |
| `want.parameters["createForm"]` 未判空 | 同上（44143 build.log11 CreateFormAbility） | 先 `const params = want.parameters; if (params == undefined) return;` 再用 `params` |
| `let commonEventPublishData = { parameters: { Life: ... } }` | arkts-no-untyped-obj-literals（44143 SecondAbility） | 本地 `interface` + `@ohos.commonEventManager` 的 `CommonEventPublishData`（`@ohos.commonEvent` **无**该导出；`Record` 不够） |
| `onDump(param)` / `return null` | 与 UIAbility `onDump` 签名不兼容 | `onDump(param: Array<string>): Array<string>`，空返回 `[]` |
| `onShare(wantParam)` 且赋值用逗号表达式 | arkts-no-any-unknown + arkts-no-comma-outside-loops | `onShare(wantParam: Record<string, Object>): void`；赋值用分号；嵌套对象先赋给 typed `Record` |

## 1.2 静态 `FileEntity.flags?: Int` 与 `wantConstant.Flags`（PR45280 / ESE593372）

| 写法 | CI 结果 | 说明 |
|------|---------|------|
| `flags?: number = Flags.FLAG_…` | ESE985118 | 静态 SDK 字段为 `int`/`Int`，不能用 `number`/`Double` 实现 |
| `flags?: Int = Flags.FLAG_… as Int` | **ESE593372** | `Flags`→`Int` 显式强转不支持 |
| `flags?: Int = Flags.FLAG_….valueOf()` | **通过** | 门禁文案要求 `enumValue.valueOf()`；断言侧也用 `.valueOf()` |

门禁规则：**COMPILE.ENUM_AS_INT.01**（检测 + `--fix`：`Flags.XXX as Int` → `.valueOf()`）。

### 1.2.1 静态 `focusedUid: int` 勿用 `typeof === 'number'`

| 写法 | 板测 | 说明 |
|------|------|------|
| `typeof info.focusedUid).assertEqual('number')` | AssertException → 若再 `as BusinessError` 则 ClassCast | SDK 字段为 `int`，typeof 不是 `'number'` |
| `info.focusedUid >= 0` / 业务范围断言 | 通过 | 回调内断言失败勿被外层 BusinessError 强转吞掉 |

### 1.2.1b 静态 `Int as number` → ESE123811（PR45360）

| 写法 | CI | 修法 |
|------|-----|------|
| `hilog.info(..., observerId as number)`（`observerId: Int`） | **ESE123811** hard fail | `Int.toDouble(observerId)` |
| `number` 字段再 `as Int` | 另见 ENUM_AS_INT / 显式转换 | 勿双向乱转 |

门禁：**COMPILE.INT_AS_NUMBER.01**（`'use static'` 文件扫 `\bas\s+number\b`）。

### 1.2.1c 动态 ohosTest 禁 `@ohos.arkui.stateManagement`（PR45360）

| 写法 | CI dayu200_xts_acts | 修法 |
|------|---------------------|------|
| `import { AppStorage } from '@ohos.arkui.stateManagement'` | Cannot find module | 删 import；`globalThis.context`（TestAbility 已写）或裸 `AppStorage` 全局 |
| 静态一体工程同 import | 通常可编 | 仅 **ohosTest** 动态侧硬拦 |

门禁：**COMPILE.DYN_STATEMGMT.01**（路径含 `/ohosTest/`）。

### 1.2.2 板端 dryRun 挂死：`implements insightIntent.FileEntity`（classlinker）

| 现象 | 根因 | 修法 |
|------|------|------|
| xdevice 装包成功后 `aa test … dryRun true` 无结果 / 无 XML；hilog `Cannot find class …/insightIntent/FileEntity` + `onRun failed status : 6` | 编译期 SDK 有 `FileEntity`，**设备 static 运行时无该类**；`implements insightIntent.FileEntity` / `@InsightIntentEntity` 把接口写进 abc → classlinker 失败 | **勿** `implements insightIntent.FileEntity`、**勿** `@InsightIntentEntity`；用本地 `interface` 镜像字段 + 对象字面量；`flags` 仍用 `.valueOf()` |
| 误判「人工终止 / shell-timeout」 | 超时只是表象 | 先 `hilog` 搜 `FileEntity` / `classlinker` / `onRun failed` |

## 2. `function ()` → 箭头函数（10605046）

- 规则：`arkts-no-func-expressions`
- 高发：`commonEventManager.publish(..., function () { ... })`、双参 `publish(event, options, function () {})`
- 修复：`function () {` → `() => {`
- **合入陷阱**：master 仍是 `.ts` 且含 `function()`；PR 已 rename 为 `.ets` 时，CI auto-merge 会把 master 新增块合进 `.ets`，**原样带入 function()**。故必须按 §0 在 **merge 后的树** 上再扫一遍。

## 3. 读 CI 日志要点

1. 搜 `COMPILE RESULT:FAIL` / `OhosTestCompileArkTS` / `Error Message:`
2. 以 **`Error Message:` + 文件:行号** 为准；`ERROR:N` 可能含重复计数，以去重后的 Message 列表收口
3. `FAILED: .../unsigned_hap_path_list.json` 只是 ninja 汇总，根因在其上方的 ArkTS ERROR
4. 一轮修完后：**同工程**再扫 §0，避免只修已知行、漏同文件其它 `function(`/`as unknown`
5. **`Failed to resolve OhmUrl ... "@ohos/hypium"`**：几乎总是 CI merge master 后工程已切 `@ohos/hypium-dynamic`，而**新增** `.ets` 仍写 `@ohos/hypium`。先看该工程 `oh-package.json5`，再改 import 与现有用例一致（43815 build.log16）

## 4. 门禁规则映射

| CI 码 / 规则 | 门禁 ID | 检测 |
|--------------|---------|------|
| arkts-no-any-unknown / `as unknown` | COMPILE.ANY.01 | ets_checker（含 `as unknown`） |
| arkts-no-func-expressions | COMPILE.FUNC_EXPR.01 | ets_checker |

## 5. 反例（req4）

```ets
// bad — 10605999
context.createAreaModeContext(undefined as contextConstant.AreaMode);
// bad — 10605008
context.createAreaModeContext(undefined as unknown as contextConstant.AreaMode);
// good
context.createAreaModeContext(undefined);

// bad — 10605046
commonEventManager.publish('ACTS_TEST_DESTROY', function () { ... });
// good
commonEventManager.publish('ACTS_TEST_DESTROY', () => { ... });
```
