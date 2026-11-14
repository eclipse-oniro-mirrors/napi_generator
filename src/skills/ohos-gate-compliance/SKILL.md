---
name: ohos-gate-compliance
description: >-
  OpenHarmony 统一门禁检查（v2.0 整合版）：代码门禁检查（ETS/ArkTS + C++ 项目，检查+自动修复）
  + skill 门禁检查（提交 napi_generator/src/skills 时自动触发）。规则全部脚本化
  （rules/*.json 规则注册表 + scripts/checkers/* 检查器），无 md 文本规则。
  触发词：门禁、CodeCheck、gate-review、PR 提交前、skill 门禁、G.FMT.06。
version: "2.0.0"
---

# 统一门禁检查（ohos-gate-compliance v2.0）

整合来源：原 ohos-gate-compliance + ohos-gate-compliance-pr-check（已并入，脚本化）
+ ohxts-stage-ets-hypium-upgrade 门禁能力 + xts-git-commit/commit_push 代码检查规范能力。

## 两大功能

| 功能 | 时机 | 入口 |
|------|------|------|
| **代码门禁检查**（核心） | XTS 用例工程提交前（ETS/ArkTS + C++） | `gate_check.py code` |
| **skill 门禁检查** | 提交 napi_generator/src/skills 时（pre-commit hook 自动） | `gate_check.py skill` |
| **Java 门禁检查** | basetype ETS→Java 转换产物提交前 | `gate_check.py java-check` |

## 入口命令

```bash
# Java 门禁（basetype 转换产物）：扫描 + 自动修复
python3 src/skills/ohos-gate-compliance/scripts/gate_check.py java-check <目录> [--fix] [--strict]
# 示例：五项目批量修复
python3 .../gate_check.py java-check \
  src/intellij_plugin/ohosgen/src/test/java/basetype/{uint8array,uint8array2,uint16array,uint16array2,uint8clampedarray,common} \
  --fix --strict
```

```bash
# 代码门禁：扫描工程（自动识别 ets/capi profile），--fix 自动修复两轮后复查
python3 src/skills/ohos-gate-compliance/scripts/gate_check.py code <工程目录> [--fix] [--strict]
# 只查改动代码（提交前）：--base 分支对比 / --staged 暂存区
python3 .../gate_check.py code <工程> --base origin/master
python3 .../gate_check.py code <工程> --staged
# 指定 profile / 只看某类规则
python3 .../gate_check.py code <工程> --profile capi --rule G.FMT.02,G.NAM.03
# skill 门禁（提交 src/skills 前；hook 已自动执行）
python3 .../gate_check.py skill [<skill目录>] [--staged] [--strict]
# pipeline（设备整测通过后门禁 review + commit，兼容原 gate_review.py）
python3 .../gate_check.py pipeline <工程> -s <Suite> [--skip-commit] [--commit-title "..."]
# 提交编排（门禁审计 + 行数审计 + -sm 提交 + 验证）
python3 .../scripts/commit_utils.py -m "test(ability): xxx" --cwd <仓库>
```

退出码：`0` 通过；`1` 有违规（--strict 阻断）或失败；`2` pipeline 未修复项。

## 规则注册表（全部脚本化，规则本体在 checkers/）

| 注册表 | 规则数 | 覆盖 |
|--------|--------|------|
| `rules/rules_ets.json` | 39+ | G.EXT/G.FMT/G.NAM、XTS.CHECK.*、COMPILE.*（import/any/**func-expr**/private）、xtscheck、CI.KIT、WordsTool、ArkTS Quality；CI 编 HAP 见 `docs/ci-arkts-compile-playbook.md` |
| `rules/rules_config.json` | 3 | CI.SDK.01、**CI.HVIGOR.01**（modelVersion 禁 6.0.0→26.0.0）、**XTS.CHECK.HAPNAME.01**（test_hap=true 须 Acts…Test） |
| `rules/rules_cpp.json` | 11+ | G.FMT.06-CPP（自动修复）、**G.FMT.17-CPP**（`{` 后禁空行，自动修复）、G.FMT.05 行宽（napi desc 自动折行）、G.FUD.05 nbnc≤50、FUNC.CC≤20 / FUNC.DEPTH≤4 / MAGIC.NUM / **G.CNS.02-CPP**（MakeIntArray/vals[N] 裸长度）/ G.NAM.03-CPP / HEADER.NBNC≤300（启发式）、OAT.3 许可证头 |
| `rules/rules_skill.json` | 9 | FILE.NBNC≤2000、FUNC.NBNC≤50、FUNC.CC≤20、FUNC.DEPTH≤4、G.NAM.01、G.EDV.04（禁 shell=True/bash argv0）、SYNTAX、WordsTool 词表、PY.COMPILE |
| `rules/rules_java.json` | 6 | G.OTH.03 未用 import、G.CMT.02 类 Javadoc+@since、G.FMT.13 `; }`、G.ERR.02 catch 收窄、G.CMT.01 public Javadoc、G.NAM.06 `$xN`/非 final UPPER 字段 |

规则字段：`{id, name, category, severity, detect, pattern, fix}`；detect 取值
`regex/heuristic/length/ast/build/manual`，对应 checkers 内实现。

## 检查器（scripts/checkers/）

| 模块 | 职责 | 自动修复 |
|------|------|----------|
| `ets_checker.py` | ETS/TS/JS 全量规则（迁移自 code_selfcheck+arkts_patterns+gate_review） | @tc 冒号/空行、ArkTS Quality、G.FMT.10/08/11/**03**、WordsTool.97/177、**G.OBJ.04** 点号、引号转换 dq_to_sq |
| `cpp_checker.py` | C++ 规则（fmt06/fmt05/fmt17 修复 + 启发式 CC/深度/魔法数/头文件/许可证头） | G.FMT.06-CPP 缩进；G.FMT.05 napi desc 折行；**G.FMT.17-CPP** `{` 后空行 |
| `config_checker.py` | build-profile / BUILD.gn hap_name / modelVersion / 父 group 挂接 | CI.SDK.01；**HAPNAME.01**；**CI.BUILDGN.PARENT.01** / **PEER_DOTDOT.01** |
| `git_checker.py` | git 层：版权头（merge-base）/违禁文件/整文件重写/数据安全/新增行质量 | 无（报告） |
| `skill_checker.py` | skill 仓：Python AST 门禁 + WordsTool 词表 + py_compile | 无（报告） |
| `java_checker.py` | Java basetype：6 条 CodeCheck 规则（rules_java.json） | G.OTH.03/G.CMT/G.FMT.13/G.ERR.02/G.NAM.06 |
| `pipeline.py` | 设备整测通过后：测试校验→profile→两轮修复→commit（兼容 gate_review.py） | 聚合以上修复 |
| `commit_utils.py` | 提交编排：审计→行数（≤1900）→`-sm -F`→提交后验证 | 无 |

## 门禁铁律

- **代码门禁**：设备整测全绿 → `gate_check.py code <工程> --fix --strict` → 剩余项人工修 →
  `commit_utils.py -m "test(scope): ..."`（自动 -sm + Co-authored-by: Agent，单笔 ≤1900 行）
- **skill 门禁**：pre-commit hook（`scripts/hooks/pre-commit.skill-gate`）在提交
  `napi_generator/src/skills` 时自动执行；安装：`bash scripts/install_hooks.sh`
- **自举**：本 skill 自身代码也必须过 skill 门禁（FUNC.NBNC/CC/DEPTH、G.EDV.04、WordsTool）
- **加固**：门禁失败手工修复的规则须同步固化（rules/*.json 或 checker 实现），禁止只改代码

## 门禁报错修复策略（硬门禁，2026-11 PR45250/45331 实锤）

> CodeCheck / dayu200 编译失败时，**先怀疑配置或挂接写错**，再改业务代码。  
> **禁止**为「让本轮 CI 绿」发明非常规挂接、空断言、注释掉规则、改错目录。

| 步骤 | 要求 |
|------|------|
| 1. 读报错 | 下载 log；定位到**本 PR 改动路径**的 ERROR（非 hypium 噪音） |
| 2. 对照同级 | 打开**同目录已合入兄弟工程**的 `BUILD.gn` / `module.json5` / `oh-package` / 用例写法，按惯例对齐 |
| 3. 判根因 | 缺父 group 注册、OhmUrl、SDK 类型、签名 ACL 等 → **改配置/类型到正确形态** |
| 4. 禁绕过 | 禁止：把套件挂进无关兄弟 `group`（`../peer`）、禁改 hap_name/module-name 糊弄、禁软 OR/恒真垫绿 |
| 5. 再验证 | `gate_check.py code` + 能本地编则编；push 后按 **gitcode-pr** 跟进 |

**BUILD.gn 挂接**：`ohos_js_app*_suite` 工程须在**最近父目录** `BUILD.gn` 的 `group` deps 注册（如 `ability_runtime/BUILD.gn` 写 `"actsfoo:ActsFooTest"`）。  
纯 `group()` 聚合器**禁止** `"../同级套件:…"`（**CI.BUILDGN.PARENT.01** / **CI.BUILDGN.PEER_DOTDOT.01**）。  
kit 内 suite→Rely 的 `../rely` 仍允许。

## 检视意见防复发清单（2026-08-24 五笔 PR 实锤）

| 类型 | 禁止行为 | 正确做法 |
|------|----------|----------|
| 签名断言 | 修改 callerAppId/appId 等签名断言值 | 本地签名与项目官方签名不同，本地失败正常；断言保持官方签名生成值（门禁 XTS.CHECK.SIGN.01 拦截） |
| Test.json | 修改 module-name | module-name 指向主模块（build-profile modules[0].name），xdevice 依赖它找主 hap（门禁 XTS.CHECK.MODULE_NAME.01 拦截） |
| 动态 compatibleSdk | 写成数字 `26` 且 compileSdk 为过期 `"26.0.0"` | 00306042：API≤25 用数字（常用 `12`）；API≥26 的 `compileSdkVersion` 用当前 **api_full** 字符串（现 `"26.0.1"`，禁 `"26.0.0"`）；compatible 对齐 peer 常用数字 `12` |
| 静态工程目录 | 命名成 `*statictest` | 目录名须以 `static` 结尾：`*teststatic`（门禁 XTS.CHECK.PROJECT_NAMING.01） |
| test HAP 名 | `hap_name = "ActsFooRely"` + `test_hap=true` | 须 `Acts…Test`（**XTS.CHECK.HAPNAME.01**）；`*Rely` 仅用于 `ohos_app_assist_suite`（PR45112） |
| 用例内日志 | `console.error(...)` 且无 done | 改为 `console.info`，或 it 声明 done（门禁 XTS.CHECK.ASYNC_TESTCASE.01，gitcode 把 `.error` 当异步链） |
| module.json5 deviceTypes | 通过别的文件绕过 deviceTypes | 设备类型配置只改 module.json5 的 deviceTypes |
| 原有逻辑 | 为过本地调试改动断言/逻辑/事件 | 仅迁移与门禁必要修改；「不要动原有逻辑」类意见=还原 |
| srcEntrance | 想当然改 srcEntry 路径 | 路径按实际文件位置，改完检查目录下所有引用 |
| syscap.json general | 单独改 syscap 设备类型 | 设备类型以 module.json5 的 deviceTypes 为准，两边须一致（syscap 空则 module 也空；门禁 XTS.CHECK.DEVICETYPE.01 拦截） |
| NAPI `.so` 导入 | `import * as xxx from 'libxxx.so'` | **必须** `import xxx from 'libxxx.so'`（默认导入）；`* as` 会导致 C 接口 XTS **覆盖率扫描不到**（#43245/#44443）；门禁 **XTS.CHECK.NAPI_SO_IMPORT.01** 拦截+自动修复 |
| G.OBJ.04 点号 | `want?.parameters?.['withGroupId']` | 简单字面量键用点号：`?.withGroupId`；PascalCase 协议键仍用 `[]`（G.NAM.03；PR44704） |
| WordsTool.177 | 注释 `may … as 16000011`（易歧义独立词） | 改 `commonly returns`；图形术语改 host/TEXTURE（PR44704；检测+部分自动修复） |
| WordsTool.9 | 注释/TAG 裸写 `Ability Manager Service` | 注释改 `framework`；TAG 改 AbilityStage（PR45075；注释可 `--fix`） |
| static clearTimeout | `clearTimeout(Double)` / `timerId: number` | 句柄用 `int`；`if (err)` 内勿 `err?.`（PR45075 playbook） |
| static `setTimeout(resolve)` | `ESE0046` 把 resolve/reject 直接传给 setTimeout | 改箭头回调 `setTimeout((): void => { resolve(0); }, ms)`（**COMPILE.SETTIMEOUT.01**）；**EventBus onWait 必须用 setTimeout 墙钟**，禁止 shell sleep 冒充超时（PR45421） |
| static `resolve()` 零参 | `Expected 1 arguments, got 0`（EventBus） | `resolve(0)`+`Promise<int>`（`Util.msSleep`）或 `resolve(undefined)`（PR45421） |
| Hypium `execute timeout 5000ms` | 异步 CommonEvent/`startAbilityForResult` 链未 `testcase-timeout` | `Test.json` 加 `"testcase-timeout": "60000"`；用例内 wait ≤ 该值（PR45306 NoPerm BackToCaller） |
| static adaptToHandedness | `Double` 不兼容 `HandednessFollowMode` | 用 `@ohos.arkui.dialog` 真枚举，勿 number 注入（PR45178） |
| G.CNS.02 ASSERT_EQ | `ASSERT_EQ(ENUM, 2)` 右值裸数字 | 枚举互比 `ASSERT_EQ(A != B, true)`（PR45178；cpp 检测） |
| import 拆分 | 同一模块拆成多条 import | 超 120 字符可换行，不可拆 import（如 StartOptions 并入原 import；门禁 G.FMT.13 拦截+自动合并） |
| catch 补 done() | 为过「门禁」在 `.catch` 里硬插 `done()` | **勿补**：2026-09-10 接口人确认原规则为误报，平台已删；本地也不再检/不修 |
| 浮空 Promise | `startAbilityByCall` / `getCurrentTopAbility` / `startAbility` / `createSubscriber` / `getSubscribeInfo` 的 `.then` 未 await 且无 `.catch` | 在该 `.then` 后补 `.catch`（req7/req3/req5/PR44400；本地 XTS.CHECK.ASYNC_TESTCASE.02） |
| hook/成功路径 assertFail | `beforeAll` 或 try/catch 后 / unsubscribe 成功回调内无条件 `expect().assertFail()` | 删除；错误路径断言放在 catch/.catch 内（门禁 XTS.CHECK.ASSERTFAIL.01） |
| 误删失败路径 assertFail | js/ts→ets 或批量改写时删掉 `.catch` 内 `expect().assertFail()` | **保留**；删后用例无 `expect(` → ASSERTION.01（req3 openlink 实锤） |
| Promise 成功路径无 expect | `await api(...);` 仅 hilog / 无 `expect(` | 成功后补业务断言（勿 `expect(true)`）；**XTS.CHECK.ASSERTION.01**（PR45280 Call_static） |
| 回调裸 `if (err)` + assertFail | CommonEvent 成功带 `{code:0}` 仍进失败分支 | **`if (err && err.code !== 0)`**；门禁 **XTS.CHECK.ERR_CODE.01** 检测+`--fix`（PR43852） |
| 回调错误分支无 assertFail | `if (err && err.code !== 0) { log; return }` 未断言 | 加 `expect().assertFail()`（PR43852 检视） |
| 字符串折行断词 | `debugApp`/`callerUid` 等被拆行 | 仅在逗号等边界折行（UiAbility17） |
| G.NAM 改坏 IPC 字符串 | autofix 把 `const Event_X = 'Event_X'` 的字面量也改成 camelCase | **已修** fix_ets_nam 跳过字符串；人工改名时字符串保持原协议值 |
| G.NAM.03 PascalCase / Property name | 漏 `interface { Abstract: string }`（CodeCheck Property name） | 检出 PascalCase 类型属性；协议键用 `Record` + `obj['Abstract']`（PR44143） |
| 对象字面量类型 | 用 class 定义纯数据辅助类型 | 用 interface（如 interface JsonParam { name: string; ... }）；ArkTS 对象字面量须显式类型（arkts-no-untyped-obj-literals） |
| 深比较/工具逻辑 | 迁移时顺手改判断逻辑 | 仅编译适配（如 `key in obj2`→`Object.keys().includes`、泛型索引加 as Record），须说明原因；语义等价才可改 |
| 删除原有代码块 | 因重复调用等理由删断言/回调块 | 检视倾向保留原有逻辑；确需删须在提交说明理由 |
| 异常参 undefined | `undefined as T` / `as unknown as T` | **直接传 undefined**（10605999↔10605008）；见 `docs/ci-arkts-compile-playbook.md` |
| 门禁报错瞎绕过 | 为躲编失败挂无关 group / 改坏惯例配置 | **先对照同级正确配置**；见上节「门禁报错修复策略」 |
| 套件未挂父 BUILD.gn / group 用 `../` 挂同级 | `actsclimgrnoperm` 挂进 amstest | 父 `ability_runtime/BUILD.gn` 注册；**CI.BUILDGN.PARENT.01** / **PEER_DOTDOT.01**（PR45250/45331） |
| 静态 `Flags as Int`（ESE593372） | `FileEntity.flags?: Int = Flags.X as Int` | `.valueOf()`；**COMPILE.ENUM_AS_INT.01** 检测+`--fix`（PR45280） |
| 静态 `Int as number`（ESE123811） | `hilog(..., observerId as number)` | `Int.toDouble(observerId)`；**COMPILE.INT_AS_NUMBER.01**（PR45360） |
| 动态 ohosTest `stateManagement` | `import { AppStorage } from '@ohos.arkui.stateManagement'` | 模块不存在；`globalThis.context` / AppStorage 全局；**COMPILE.DYN_STATEMGMT.01**（PR45360） |
| backToCaller 16000074 vs 401 | `xts_…`/`''`/长假数字串却 expect 16000074 | **`'0'`** → 16000074（actsbackdemohap）；空串 → 401（PR45360 板测） |
| 静态 Intent dryRun 挂死 | `implements insightIntent.FileEntity` / `@InsightIntentEntity` | 板端无 FileEntity → classlinker + onRun 6；本地 interface 字段镜像（playbook §1.2.2） |
| 静态 FocusedUid typeof | `typeof focusedUid === 'number'` | SDK 为 `int`；用 `>= 0` 等，勿再 `as BusinessError` 吞 AssertException（§1.2.1） |
| 静态 W65000/ESE0351 | `!== undefined`/`strJson` 重声明 | 枚举比较 / 改名；见 `docs/ci-arkts-compile-playbook.md` §0.1 |
| function 表达式 | publish/then 仍用 `function ()` | 改 `() =>`（10605046）；**merge master 后再扫**（ts→ets 合入易带回） |
| CI 编 HAP | 只修 tip、不模拟 merge | 提交前 merge upstream + §0 grep + `gate_check.py code`；本地编过再 push |
| OhmUrl @ohos/hypium | 工程已 `hypium-dynamic`，新增用例仍 `from '@ohos/hypium'` | 改 `@ohos/hypium-dynamic`；门禁 **CI.OHM.01** 检测+`--fix`（43815/44113） |
| 中文注释 | 开发、调试、修改问题时新增中文注释；在项目代码中用中文标记问题、功能说明 | **不新增**中文注释；问题/功能说明写在会话回复、PR/commit 说明或台账，不写进业务源码。`@tc.*` 等 Hypium 必填字段按同仓既有风格填写（可中文 desc），**禁止**额外 `// 修复…` / `/* 功能：… */` 类标注 |
| 仅枚举数值断言（**动静态同等**） | `expect(Enum.X).assertEqual(0)` 当唯一证据 | **FAKE_COVERAGE.01**：须真实挂载/Inspector/`assertPropSame`/旗标；规格可用页面 Text 绑定（PR44669/44715） |
| 仅节点存在 | `expect(json.length > 2).assertTrue()` | **FAKE_COVERAGE.02**：改具体 `$attrs` 或业务旗标 |
| \|\| length 兜底 | `expect(a \|\| x.length > 0).assertTrue()` | **FAKE_COVERAGE.03**：去掉恒软分支 |
| 本地混签 9568332 / 假绿交付 | hapbuild autosign Assist + 门禁主包；只跑 class |
| 参数规格遗漏（接口人回捞） | 缺 length 边界 / 布尔不成对 / 事件无 data；见 **CASE-QUALITY**「API 参数规格硬清单」+ checklist DEV 条 |
| 需求静默省略 / 软覆盖（PR45112） | 误读「不涉及」跳过接口；SDK 旧不报用户；201 仅 OR；见 **CASE-QUALITY**「一批需求尽善尽美」+ checklist DEV |
| 缺 Assist 假红 | 只装 ohosTest 报 Invalid moduleName；须 Test.json 全套 CI 同签后再下结论 |
| → **DEV.SIGN.CI.01** | `sign_ci_identical`/`pr_local_verify`；全套 kit；`PR-DELIVER.md`；checklist |
| soft-skip 假绿 | 缺属性 `return` + `expect(true)` / `softSkipMissing` 后无硬断言 | **FAKE_COVERAGE.04** + ALL_TIME_TRUE；有属性硬断言，无属性则跳过勿垫绿 |
| 一 `it` 软 OR 两错误码 / `isReturn` 紧接恒真 | `code===A \|\| code===B`；`isReturn=true` 后立刻 assertTrue | **FAKE_COVERAGE.05** + ALL_TIME_TRUE；一码一条 + 业务字段（PR45112） |
| 回调与返回值混写 | 用 `getBarDisplayMode` 结果写入 `onBarDisplayModeChange` 旗标 | 分字段；回调只由注册 handler 写；可 flip/UiTest 促发（PR44715） |

## ArkTS 断言质量（自动？· 动静态共用）

| 规则 | 自动？ | 说明 |
|------|--------|------|
| ALL_TIME_TRUE.01 | 行级 regex | `expect(true)` / 字面量 assertContain / `expect(x).assertEqual(x)` / `length >= 0` |
| FAKE_COVERAGE.01 | it 体启发式 | 断言几乎全是枚举.dump 且无挂载证据 |
| FAKE_COVERAGE.02/03 | 行级 regex | length>2 存在性；\|\| length 兜底 |
| FAKE_COVERAGE.04 | it 体启发式 | soft-skip early-return 无硬断言 |
| FAKE_COVERAGE.05 | 行级 regex | `expect(code===A \|\| code===B).assertTrue` 一用例两码 |

## 兼容与迁移

- `scripts/gate_review.py` 保留为 v1 兼容入口（ohxtscapi/ohxtsdynamic/ohxtsstatic 的
  `ohxtsflow.py` 继续可用），内部走 pipeline.py + checkers
- 原 `scripts/scan_skill_repo_gate.py` / `scan_wordstool_docs.py` / `precheck_skill_commit.sh`
  已并入 `checkers/skill_checker.py` + `gate_check.py skill`，不再单独维护
- C++ 手册（编译陷阱/Inspector 约束）见 `docs/cpp-guide.md`；PR 自检清单见 `docs/checklist.md`
- **CI ArkTS 编 HAP 方案库**（undefined/unknown/function 表达式、merge 后再扫）见 `docs/ci-arkts-compile-playbook.md`
