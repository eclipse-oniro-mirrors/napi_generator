# PR 提交前自检清单（打印勾选）

## 域选择

- [ ] **ArkTS 动态**（ohxtsdynamic）— 勾选 A～F + **整测一次连跑**
- [ ] **ArkTS 静态**（ohxtsstatic）— 勾选 A～F + **整测一次连跑**
- [ ] **NAPI `.so` 导入**：禁止 `import * as xxx from 'libxxx.so'`，须 `import xxx from 'libxxx.so'`（覆盖率扫描；门禁 XTS.CHECK.NAPI_SO_IMPORT.01 自动修复）
- [ ] **CAPI / C++ NAPI**（ohxtscapi）— 勾选 A～F（ets）+ G～J（若改 framework）+ **整测一次连跑**
- [ ] **C++ / ace_engine** — 改 `frameworks/` 等 → 勾选 G～J
- [ ] **双域同批** — 两域分别勾选并分 commit

---

## A. 变更范围（ArkTS）

- [ ] 仅 `arkui/` 下本批 HAP 白名单路径（`validate_commit_scope.py` 通过）
- [ ] 未误改 `main_pages.json` / 整仓格式化 / 无关模块
- [ ] `git diff -w --shortstat` 单笔 commit < 1900 行（本地软上限；门禁硬上限 2000）

## B. ArkTS 类型（Quality）

- [ ] 无 `int`（`rg "\bint\b" <files>`）
- [ ] 无 `String` 包装类型（`Record<String`、`undefined | String`）
- [ ] **`'use static'` 文件**：颜色不用 `number` 传 `fontColor` → 用 `ResourceColor` 或 `string`
- [ ] 无新增裸 `any` / **G.EXT.02 `ESObject`**（类型注解与 `as ESObject` 均禁止；Inspector 用显式类型）
  - `windowStage.setUIContent(ctx, path, null)`：SDK26 无此签名，**不得**用 `ESObject` 强转保运行时
  - 正确：`windowStage.loadContent('MainAbility/pages/XTSIndex')`（或带 `BusinessError` 回调）
  - **COMPILE.ESOBJECT_CODE.01（CI 静态 ESE0087，2026-09 PR44143 实锤）**：禁止 `(e as ESObject).code`
    - catch 取错误码：`JSON.stringify(e)` 后解析 `"code":` 数字，或共用 `Utils.errorCode(e as Object)`
    - 勿回退 `as BusinessError`（ERROR_CODE.01）
  - **静态 charAt 下标（ESE0127/ESE0046，2026-09 PR44143）**：`charAt`/`substring` 下标用 `int`，勿用 `number`（Double）
- [ ] **门禁报错先对照同级配置（PR45250/45331）**：禁止为躲编失败瞎挂 `../` 进无关 group；`ohos_js_app*_suite` 须在父 `BUILD.gn` group 注册（**CI.BUILDGN.PARENT.01** / **PEER_DOTDOT.01**）
- [ ] **COMPILE.ENUM_AS_INT.01（CI 静态 ESE593372，2026-11 PR45280）**：禁止 `Flags.XXX as Int`；`FileEntity.flags?: Int` 用 `.valueOf()`
- [ ] **COMPILE.INT_AS_NUMBER.01（CI 静态 ESE123811，2026-11 PR45360）**：`'use static'` 禁止 `x as number`；`Int` 用 `Int.toDouble(x)`
- [ ] **COMPILE.DYN_STATEMGMT.01（CI dayu200_xts_acts，2026-11 PR45360）**：ohosTest 禁止 `import … '@ohos.arkui.stateManagement'`；用 `globalThis.context` / AppStorage 全局
- [ ] **COMPILE.ANY.01 / FUNC_EXPR.01（CI 编 HAP，2026-09 req4 实锤）**
  - 禁止 `as unknown` / `as any` / `: unknown`（异常参直接传 `undefined`，勿经 unknown 中转）
  - 禁止 `function () {}` 回调，改 `() => {}`（publish 等高发）
  - **先 merge/rebase upstream/master 再扫**（ts→ets auto-merge 会带回 master 的 function()）
  - 详见 `docs/ci-arkts-compile-playbook.md`
- [ ] **CI.OHM.01（CI OhmUrl，2026-09 PR44113 / 43815 实锤）**
  - 工程 `oh-package.json5` 已依赖 `@ohos/hypium-dynamic` 时，新增 `.ets` **禁止** `from '@ohos/hypium'`
  - 改 `@ohos/hypium-dynamic`（与同目录现网用例一致）；`gate_check --fix` 可自动替换
- [ ] **静态 W65000 / ESE0351（CI dayu200_xts_static，2026-09 MR44086 实锤）**
  - 同一 `it()` 内禁止重复 `const strJson`（改 `strJson2` / `strJsonBtn`）
  - 禁止对枚举/方法写 `!== undefined` / `!== null`（W65000 always true）；改枚举比较或成功路径直接赋值
  - 见 `docs/ci-arkts-compile-playbook.md` §0.1
- [ ] **OpenHarmonyTestRunner `executeShellCommand`（CI 编 HAP，2026-09 apiCoverage0910 实锤）**
  - 回调勿写 `(err: Error, d: Object)` 再访问 `d.stdResult` / `d.exitCode`（CI：Property does not exist on type Object）
  - 正确：定义 `interface ShellCmdResult { stdResult?: string; exitCode?: number }`，回调 `(err: Error, d: ShellCmdResult)`
  - 勿回退为裸 `any`（COMPILE.ANY.01）；模板仓大量 `any` 仅作对照，新改须显式接口
- [ ] **静态 `'use static'`：Filter `onFilterChanged`（CI CompileStaticArkTS，2026-09 apiCoverage0910_static 实锤）**
  - `onFilterChanged` 在静态 API 为 **regular** 字段，禁止在 `Filter({ ... })` 字面量里初始化（forbidden to specify）
  - 正确：`Filter({ multiFilters, additionFilters?, filterType?, container })`；回调用本地
    `type OnFilterChangedCallback = ...` + 字段/调用点保留符号文本供覆盖扫描
  - `type`/`const` **须写在全部 `import` 之后**（插在 import 中间会导致后续 import 失效级联报错）

## C. Key 命名（Quality / Reliability）

- [ ] 新 key 均为 `页面名_组件名`（页面名 = 路由末段）
- [ ] 同 HAP 内无重复 key（`rg "\.key\('" | sort | uniq -d` 思路自查）
- [ ] 每个 `.key('新')` 已搜测试：`getInspectorByKey` / `sendEventByKey` / `ON.id` / `ON.key`
- [ ] 页面内 `getInspectorByKey('旧')` 已改（onClick 等）
- [ ] RelativeContainer `alignRules` 字符串锚点已随 key 更新

## D. 代码质量（ArkTS）

- [ ] 无大段注释掉的废弃代码
- [ ] **G.OTH.05**：禁止硬编码公网 URL/IP（如 `'https://www.example.com/...'`）
  - schemeHandler 假地址：拆成 `scheme + host + path` 拼接（host 用 `local.test` 等非公网），勿整段字面量
  - 业务请求：用 `XtsTestServer` / `resource://rawfile/...`，勿写公网域名
  ```ets
  // bad
  this.controller.postUrl('https://www.example.com/body-stream-read', data);
  // good
  let schemePart: string = 'https://';
  let hostPart: string = 'local.test';
  let pathPart: string = '/body-stream-read';
  this.controller.postUrl(schemePart + hostPart + pathPart, data);
  ```
- [ ] **G.FMT.09**：`if`/`for`/`while` 执行体须加大括号（`if (x) y;` → `if (x) { y; }`）
- [ ] **G.NAM.01**：`class`/`struct`/`enum` 大驼峰且无下划线（`sizeTmp`→`SizeTmp`，`gridModifier_Foo`→`GridModifierFoo`）
- [ ] **G.ERR.03**：日志里 `JSON.stringify(want)` 须 `try/catch`（先赋局部串再插值）
- [ ] G.FMT.05：源码单行 ≤120 字符；长日志参数、对象字面量按语义折行
  - Options 一行塞多字段易超宽，改为：
    ```ets
    // bad: let opts: BackgroundBlurStyleOptions = { policy: ..., inactiveColor: ..., colorMode: ... };
    let opts: BackgroundBlurStyleOptions = {
      policy: BlurStyleActivePolicy.ALWAYS_ACTIVE,
      inactiveColor: Color.Blue,
      colorMode: ThemeColorMode.LIGHT
    };
    ```
  - 长 `console.info`/`console.log`（含用例名前缀 + `JSON.stringify`）须在 `+` 处折行：
    ```ets
    // bad: console.info('[Suite_case_0100] strJson1 content: ' + JSON.stringify(...));
    console.info('[Suite_case_0100] strJson1 content: ' +
      JSON.stringify(JSON.parse(strJson1).$attrs.content));
    ```
  - `@tc.desc` 过长时缩短为可读摘要，勿堆完整类名
- [ ] `@tc.number` 与 `it()` 一致（`@tc.name` 可为英文标题，不强制等于用例号）
- [ ] 无裸 `it()`：每条 `it` 前紧邻完整 `@tc` 块（`/*` 或 `/**`，含 `@tc.number` / `@tc.name`；一体工程 `entry/.../*.test.ets`）
- [ ] `@tc` 字段保留冒号格式：`@tc.number : ID`（`fix_ets_xtscheck` 勿剥冒号）
- [ ] **XTS.CHECK.ASYNC_TESTCASE.02**（三子规则，xts_acts web 2026-08 两轮实锤）：
  - ① `await` 异步调用须在 `try...catch` 内（**含 `Utils.sleep`/`waitForExist` 等测试工具**，门禁不放行；`beforeAll/beforeEach` 已有 try 的不算）
  - ② 异步 API 回调须**声明 error 参数**：`() =>` 零参数回调违规（`Utils.registerEvent`/`Utils.waitForExist` 实锤）
  - ③ 回调声明 err/e/error 后须**检查/使用**：`(err?: Error) => x` 表达式体直接返回违规；`.catch((e: Error) => { hilog.error(..., 'failed.'); })` 未引用 `e` 亦违规 → 改为 `'failed: ' + JSON.stringify(e)`；`subscribe(…, (err, data) => {` 块内须 `if (err && err.code !== 0)`（**禁止**裸 `if (err)`，见 ERR_CODE.01）
  - ④ **未 await/return 的 Promise `.then` 链**须补 `.catch`（或 then 第二参数）；`createSubscriber().then(…)` / **`getSubscribeInfo().then(…)`** 浮空链实锤（req5 / PR44400）；多行 `startAbilityByCall({...}).then` 无 `.catch` 实锤（req7 Call_0800）；**`getCurrentTopAbility().then` / `startAbility(...).then` 浮空链**亦须 `.catch`（req3 queryfunction 实锤）
  - **不要**为过门禁在 `.catch` 里硬插 `done()`（2026-09-10 接口人确认原「catch 须 done」为误报，平台规则已删）
- [ ] **G.FMT.10**：控制语句/`method(): void` 的 `{` 与语句同行；禁止 `onCreate() {;` 类笔误；禁止 `): void\n{` 以及 `if (cond)\n{`（PR44143 / PR44444 OpenHarmonyTestRunner）
- [ ] **`loadContent` 回调第二参须为 `void`**：`(err: BusinessError, data: Object)` 对不上 `AsyncCallback<void, void>`（PR44396 UIExtension）。Logger 可变参数用 `string[]`，不要 `Record<string, Object>[]`。`connectServiceExtensionAbility` 的 options 声明为 `common.ConnectOptions`，回调参数不要写成 `Want`
- [ ] **相邻字符串字面量须显式 `+`**：禁止 `'a'\n'b'` 隐式拼接（CI ArkTS 10505001 `',' expected` / Expected N arguments；PR44444 SendableContext）
- [ ] **禁止字符串字面量跨行未闭合**：`== 'FOO' || data.event == '\n    BAR'` / `onWait('\n    EVT')` 会报 Unterminated string literal（PR44400 SystemTest/ThirdTest）；须单行或改多行拼接/`||` 续行，并保证单行 ≤120
- [ ] **Want / publish / terminateSelf 回调类型**：`abilityWant: Object` 读 `parameters` 须改为 `Want`；`publish`/`loadContent`/`startAbility` 回调用 `(err: BusinessError)`（勿 `data: Object`）；`terminateSelf().then(() => …)` 勿 `(data: Object)`（PR44400 specify/forresult/appclone）
- [ ] **ThreadWorker 路径必须是相对当前文件的字符串字面量**（如 `'../workers/Worker.ets'`）。`useNormalizedOHMUrl: true` 时编译器只改写字面量；`entry_test/ets/workers/Worker` 或经变量传入的 `.ets` 在 OpenHarmony 7.0.0.46 上都是 10200007，AbilityStage 顶层一构造整包 unavailable（PR44444）。禁止把路径收进 helper 再 `new ThreadWorker(变量)`
- [ ] **G.FMT.03**：表达式换行运算符放行末；禁止续行行首 `+ JSON.stringify(...)`，须 `'...' +\nJSON...`（PR44444 MainAbility；`--fix` 可机械挪 `+`）
- [ ] **G.EXT.01**：类属性须 `public`/`private`/`protected`；**`static readonly FOO = 1` 也要加 `public`**（req6 IDL proxy/stub）
- [ ] **WordsTool.9**：勿裸写独立缩写 `Ability Manager Service`（含注释）；注释改 `framework`，TAG/描述改 `AbilityStage` / `Stage Ability`（req6 / PR45075；`--fix` 可改注释）
- [ ] **XTS.CHECK.ASSERTFAIL.01**：`beforeAll`/`afterEach`/`beforeEach` 内禁止无条件 `expect().assertFail()`；try/catch 仅打日志后勿再 assertFail；unsubscribe 成功回调内 `assertFail` 紧邻 `done()` 须删（req7 CallTest / req10 CallFunction_0700）
- [ ] **afterEach 禁止 terminate TestAbility**：`AppStorage`/`abilityContext` 若是用例宿主，`afterEach` 里 `terminateSelf` 会在首条 PASS 后杀掉 runner，下一条永久卡住。应对齐动态版只收 EntryAbility（如 `UIAbilityContext` / `entryAbilityContext`）（PR45421 MoveAbility-static 14-10-19）
- [ ] **async afterEach 必须 `done()`**：静态 Hypium 不会等待无 `done` 的 async `afterEach`；下一条会与未完成的 `terminateSelf` 竞态（hilog：0200 `it begin` 后立刻 `TestAbility onDestroy`）
- [ ] **修等待/同步前先打开动态同名实现**：静态 `EventBus`/`onWait`/生命周期等待禁止另发明机制；有 `actsmoveabilitytobackgroundtest` 等动态对照时先对齐再改（PR45421 漏对照 → 误用 shell sleep）
- [ ] **EventBus onWait 必须用 `setTimeout` 墙钟超时**：禁止 `AbilityDelegator.executeShellCommand('sleep N')` 冒充超时——该 sleep **几乎立即返回**（18-51-20：0200 FAIL 仅 0.138s）。句柄 `int`；`setTimeout(resolve)` 直接传参改箭头回调（**COMPILE.SETTIMEOUT.01**）
- [ ] **静态 `Promise` 的 `resolve()` 必须带 1 参**：`resolve()` → CI `Expected 1 arguments, got 0`（PR45421 EventBus）；用 `resolve(0)` + `Promise<int>`（同工程 `Util.msSleep`）或 `resolve(undefined)` + `Promise<void>`
- [ ] **改超时后 hilog 核墙钟**：`onWait`→`timeout`/`resolve`/`emit` 间隔须接近设定值；对不上禁止提交/宣称已修
- [ ] **ensureForeground 须 await `Ability 启动命令`**：fire-and-forget 的 `Ability 启动命令` 可在 `moveAbilityToBackground` 后把宿主再拉回前台，导致 `onApplicationBackground` 永不到达
- [ ] **`startAbility(EntryAbility1)` 后须 `Promise.all([EntryFg, TestBg])` 再 move**：只等 Entry FG 会在 TestAbility 尚未 BG 时就 `moveAbilityToBackground`，Entry `onBackground` 可 5s 内不到（PR45421 0300；hilog 20-46-49）
- [ ] **错误路径保留 assertFail（req3）**：js/ts→ets 或批量改写时，**勿删** `.catch` / 失败分支内的 `expect().assertFail()`（openlink `StartAbility_OpenLink_0400/1600–2100`、`OpenLink_0300/0600/0700` 实锤：删后触发 ASSERTION.01「用例没有断言」）
- [ ] **回调错误分支须判 code（XTS.CHECK.ERR_CODE.01 / PR43852）**：CommonEvent / ability 成功回调常带 **truthy `{code:0}`**；**禁止** `if (err) { assertFail; return }`（会把成功当失败）。须 `if (err && err.code !== 0)`，且失败分支保留 `expect().assertFail()`
  ```ets
  // bad — code===0 仍进分支（GetAppContext/GetCurrentTopAbility 板测实锤）
  if (err) {
    console.info(`callback err: ${JSON.stringify(err)}`);
    expect().assertFail();
    return;
  }
  // good
  if (err && err.code !== 0) {
    console.info(`callback err: ${JSON.stringify(err)}`);
    expect().assertFail();
    return;
  }
  ```
- [ ] **字符串折行勿断词（PR43852 检视）**：长字面量仅在逗号/`/`等安全边界折行，禁止把 `debugApp`/`callerUid`/`myapplication` 等拆成两段（UiAbility17 实锤）

- [ ] **G.NAM.03 autofix**：只改标识符，**禁止**改字符串字面量（`const Event_FA_X = 'Event_FA_X'` → `const eventFaX = 'Event_FA_X'`；req7 Orientation 事件对不上实锤）
- [ ] **XTS.CHECK.TESTFILENAME.01**：测试文件须 `Xxx.test.ets`（Xxx 大驼峰、无中间点）；`Ability.SyncTest.ets` → `AbilitySyncTest.test.ets`；`List/Util/Common.test.ets` 豁免
- [ ] **XTS.CHECK.LIST_EXPORT.01**：`List` 导入名、`export default function`、初次 `describe('…')` 三者同名（PR43443 静态 ability 空跑实锤）
  - before / after 示例：
  ```ets
  // 违规②：零参数回调
  Utils.registerEvent("testXxx", true, 123, () => { isReturn = true });
  // 违规①③：await 裸调用 + 声明 err 未检查/使用
  await Utils.waitForExist((err?: Error) => isReturn, "xxx" + '_returnCheck', true, 1000);

  // 修复后：回调判 code 后 assertFail；await 包 try/catch
  try {
    await Utils.waitForExist((err?: Error) => {
      if (err && err.code !== 0) {
        console.error('isReturn waitForExist callback error: ' + JSON.stringify(err));
      }
      return isReturn;
    }, "xxx" + '_returnCheck', true, 1000);
  } catch (err) {
    console.error('Utils.waitForExist async call error: ' + JSON.stringify(err));
  }
  // ②修复：registerEvent 回调 (err: Error) => { if (err) {...} else { isReturn = true } }
  ```
  - **关键陷阱**：
    - `Utils.waitForExist` 签名须同步改 `stateGetter: () => T` → `(err?: Error) => T`（旧零参调用 `() => x` 仍兼容；但**必选** `(err: Error) => x` 赋给 `(err?: Error) => T` 会 TS2345）；`registerEvent` 的 done 形参是 `Function`，回调加 err 参数安全
    - `let x = await ...` 声明在 try 块内则块外不可见 → **有依赖的连续 await 合并进同一 try 块**（如 findComponent → longClick/click 链）
    - `if (!(await ...))` 须重构：先 `const v = await ...` 再判断
    - 无分号的 await 语句（`await driver.waitForComponent(...)` 行尾无 `;`）同样要包
    - 勿用 `error as BusinessError`（见 ERROR_CODE.01）；`gate_review.check_async_testcase_02` 三子规则均可检出（修复后复扫应 0 违规）
- [ ] **XTS.CHECK.ASSERTION.01**：每个 `it()` 用例体须含至少一处 `expect(...)`；异常参数覆盖可用 `hit` 计数后 `expect(hit).assertEqual(N)`。Web emitter 范式仅 `Utils.registerEvent` **不够**（断言在 Utils 内，门禁扫不到）；须在 `it`/`registerEvent` 回调内再写 `expect(...)`。**`assertPropSame` 等导入 Helper 不算**（PR45484：Helper 内有 expect，it 无 → CodeCheck 仍报 ASSERTION.01）；异常参应对齐静态写法在 it 内 `expect(a).assertEqual(b)`
- [ ] **XTS.CHECK.TCNUMBER.01**：`@tc.number` 须 `SUB_<子系统>_<部件>_<若干_测试_信息>_<4位数字>`（**至少 5 段**）。反例 `SUB_WEB_FLINGSPEEDLIMIT_0100`（4 段）；正例 `SUB_WEB_WEBATTRIBUTE_FLINGSPEEDLIMIT_0100` / `SUB_WEB_SCROLLLAYOUT_POLICY_0100`
- [ ] **WordsTool.5**：勿写独立词 `a11y`（含 `import { a11y }`、`a11y.Capability`）；`@kit.AccessibilityKit` / `myaccessibilityapp` 复合标识不命中。`enableAbility` 勿用 `string[]`（CI 10505001 拒 `Capability[]`）；用 `('retrieve' | 'gesture')[]`（PR44545）
- [ ] **XTS.CHECK.HAPNAME.01**：`ohos_js_app_suite` / `ohos_js_app_static_suite` 且 **`test_hap = true`** 时，`hap_name` 须匹配 `^Acts[A-Za-z0-9]+Test$`（同步改 GN target 名与 `Test.json` 的 `*.hap`）。**禁止**用 `*Rely` 作 test HAP 名（`*Rely` 留给 `ohos_app_assist_suite`）。PR45112：`ActsAbilityApi26NoPermissionRely`→`ActsAbilityApi26NoPermissionTest`
- [ ] **XTS.CHECK.ALL_TIME_TRUE_ASSERTION.01**：禁止恒真断言：`expect(true).assertTrue()`、字面量 `expect('emitFoo').assertContain('Foo')`（子串恒成立）、`expect(x).assertEqual(x)`、`expect(*.length >= 0).assertTrue()`。改为业务条件（如回调内 `isReturn = true` 后 `expect(isReturn).assertTrue()`；`commonEventValues.length > 0`；字段用 typeof/枚举范围）
  - API 成功/业务错误二选一路径：成功分支断言业务字段（如 `abilityResult.resultCode`），勿 `expect(true)` / 勿 `isReturn=true` 后立刻 `expect(isReturn).assertTrue()`（PR45112 BackToCaller 返工）
  - **backToCallerAppWithResult 错误码分层（PR45360 板测）**：要断言 **16000074**（无 caller）用 requestCode **`'0'`**（对齐 `actsbackdemohap`）；长伪造数字串/`''`/`xts_…` 会先 **401**。禁把 empty 或长假 id 当成 16000074
  - **一码一条**：禁止 `expect(e.code===A \|\| e.code===B).assertTrue()` / `isXxxErr` 多码袋；每错误码独立 `it` + `assertEqual`（PR45112 接口人；门禁 FAKE_COVERAGE.05）
  - abilitymonitor Sync 0700 实锤：`removeAbilityMonitorSync(WrongName)` 成功路径勿写恒真
  - Web 静态 emitter 补 ASSERTION.01 时勿用字面量 assertContain（PR44545 flingSpeedLimit）
  - soft-skip / 设备不可用路径：**禁止** `expect(true).assertTrue()` 垫断言；直接 `done(); return;`（或空 body 结束）。PR44669 TopFloatingBarLegacy 实锤
  - HyperSnap getLastError（PR44817）：勿再叠 `assertEqual(info.code)` / `msg.length >= 0`；用 `assertErrorInfo` 类硬断言即可
  - **ResourceColor / 主题色 undefined**：新镜像上「省略」Inspector 常为 `null`，显式 `undefined` 常解析为 `#AARRGGBB`；勿硬比相等。两侧同为 sentinel → `assertEqual`；一侧 `null` 且另一侧 `#…` → `expect(color.length >= 7).assertTrue()`（PR44669 AbnormalStatic 0700–1100）
  - 静态 `设备 unittest` **不自动 loadContent**：event 10 无监听则回调 `done()` 永不触发→180s 超时；`beforeAll` 须 `Ability 启动命令 EntryAbility`，用例末尾按姐妹套件再调 `done()`（PR44545）
- [ ] **XTS.CHECK.FAKE_COVERAGE.（01～04）假覆盖零容忍**（PR44669/44715 接口人红线；**静态 + 动态同等**；门禁可检）
  - **禁止仅枚举数值**：`expect(TabVisibility.VISIBLE).assertEqual(0)` / `expect(TabsSidebarDisplayStyle.DISPLACE).assertEqual(1)` 作为唯一证据 → **假覆盖**。规格可写页面 Text/`AppStorage` 绑定，且**必须**同批有真实挂载或 Inspector/`$attrs`/`assertPropSame`/返回值旗标
  - **禁止仅节点存在**：`expect(strJson.length > 2).assertTrue()` / 只认「节点在不在」→ 改为具体属性或业务旗标
  - **禁止恒软兜底**：`expect(a || b || x.length > 0).assertTrue()`、`pairEqualOrSkip` 空串恒 true 再 `expect(true)` → 去掉恒真分支
  - **禁止 soft-skip 垫绿**：`isAttrMissing` / `softSkipMissing` / `not exposed; skip` 后 `return` 且无硬 `expect` → 要么跳过（无假 assert），有属性则硬断言；Inspector 不吐字段时用**真实 API 调用 + 返回值/回调旗标**，勿用「节点存在」糊弄
  - **动态额外**：异常参用单属性 `assertPropSame`，禁止整段 `$attrs` JSON；主包 Helper 无 `expect`；勿 `assertLarger(N-1)` 降预期糊弄环境差
  - **API1.2 四类**：调用 / 入参 / 参数规格 / 返回值须可追溯到页面真实链式调用；回调旗标与 controller 返回值**分字段**
  - Before/After 见 **ohxtsstatic** 与 **ohxtsdynamic**「断言质量硬门禁」；PR44715 矩阵可作模板
- [ ] **WordsTool.22**：勿裸写 `AudioS​tate`（含 `audio.AudioS​tate.*`、UI id `AudioS​tateText`）；改用数值常量（如 running=`2`）与中性 id（如 `LongTaskMediaStateText`）
- [ ] **G.EXT.03**：`Array<T>` → `T[]`（含 `Map<string, Array<X>>` → `Map<string, X[]>`；`fix_arkts_quality` 可自动改单层泛参）
- [ ] **XTS.CHECK.ERROR_CODE.01**：禁止 `error as BusinessError` / `let err: BusinessError = error as …`；`catch` 内用 `JSON.stringify(error)` 打日志
- [ ] **G.EXT.01**：类属性须显式 `public`/`private`/`protected`（RspBean / AdContentRsp 等）
- [ ] **G.NAM.03**：局部变量/形参/interface 属性 lowerCamelCase；禁止 PascalCase 如 `MainAbilityName`、`onDump(Param)`、`Abstract:`（PR44143 CodeCheck Property name）；UPPER_CASE 可保留。对外协议若必须 PascalCase/snake_case 键，用 `Record` + `obj['Abstract']` / `parameters['reward_ad_status']`，勿在 interface 上写非 camelCase 属性名
- [ ] **G.FMT.02**：单行 ≤120；长方法签名按参数折行
- [ ] **DEV.SIGN.APL.01**（pcs 本地签包）：`pcs_n​dk` / `pcs_arkts` 须 **`apl=normal`**（+ 用例所需 `restricted-permissions`）；勿用残留 `system_core` 模板。`system_core` 可致 `bind` EACCES → `testSocketApi0100` App died（fork 忙等），以及 `securityLabel`/`testFileRiskLevelEnable0100` 失败
- [ ] 合并冲突未保留「仅 id 无 key」或旧 key 版本
- [ ] Dialog/Present 类：`NORMAL`/`UEC` 后只点 OK/取消关遮罩；Inspector 防空 JSON；**禁止**「找不到取消就 pressBack」（会把 Ability 切后台）
- [ ] **CI.KIT.01 / CI.SDK.DIALOG.01**（7.0 门禁）：
  - 本地/设备 SDK 有 Dialog API 时：`DialogPresenter` ← `@ohos.arkui.UIContext`；`dialog`/枚举/`DialogResult` ← `@ohos.arkui.dialog`；**勿** `from '@kit.ArkUI'`。
  - **若 CI 报** `Cannot find module '@ohos.arkui.dialog'` **或** `UIContext` **无** `getDialogPresenter`：属 **CI prebuilts SDK 未带该 API**（与导入路径无关）→ 父级 `BUILD.gn` **暂注释**该 HAP deps，注释标明 SDK 补齐后恢复。**禁止**仅因本地 DevEco/`command-line-tools` SDK 已有 API 就恢复编入（CI 用 `prebuilts/ohos-sdk`）。
  - 嵌套 Options 须显式类型：`dialog.DialogMessage` / `dialog.DialogButton[]`。
- [ ] Dialog **禁止** `DocumentViewPicker`/`FilePicker`/`系统 UIExtension` 模拟 UEC：Extension 退出后 UiTest `FindWidgets` 可永久失联并污染后续 Suite；103306 系统 UEC 勿用 `expect(true)`/`env skip` 假绿
- [ ] **工程整测**：全部 Suite **一次** `deploy-test`/`static-deploy-test` 连跑（禁止拆多次且每次重装后拼结果）
- [ ] **改码必重编（DEV.REBUILD.01）**：本批有 `.ets`/resources 改动 → 过期 HAP **已作废**；须 `build-all`/`hapbuild build`+sign 出新包再测；**禁止**查找/安装改码前旧 signed.hap
- [ ] **双包双装**：有 `entry/src/ohosTest/` → 主+测两包均新编并均已 `hdc install`（勿 `install -g` 对 release）
- [ ] **PR 范围（DEV.SCOPE.01）**：工程列表来自 `git diff <base>...HEAD --name-only` 反推，**未**按单 commit 文案跳过同 PR 其它 HAP
- [ ] **结果真实（DEV.REPORT.01）**：每 HAP 日志含 `OHOS_REPORT_RESULT` 且 Fail=0 Error=0；无 RESULT / App died **不得**写「通过」
- [ ] **设备卫生**：跑测前已解锁（wakeup/setmode/上滑）；无锁屏挡 UiTest
- [ ] **交付验板 = 门禁同签（DEV.SIGN.CI.01，2026-10-31）**：`sign_ci_identical` / `pr_local_verify`（dist OpenHarmony.* + 工程 `openharmony_sx.p7b`）；**禁** hapbuild autosign / `sign_one`/`/tmp/xts_sign` 辅助包与门禁主包混装（9568332）
- [ ] **全套 kit + 全模块**：Test.json AppInstallKit 齐；交付 **禁** `-s class` 子集当绿；`unavailable=0`
- [ ] **PR 描述贴汇总截图**：`summary_top.png` + `gitcode-pr describe-report`；失败读 log 修到绿；见 `xts_shared/PR-DELIVER.md` / `CASE-QUALITY.md`
- [ ] **用例质量**：接口人条目无遗漏、无假覆盖（恒真断言 / 口头「差不多」）
- [ ] **API 参数规格（CASE-QUALITY P0）**：字符串 length 空/1/上限/上限+1；有效范围+越界；布尔 true/false 成对；枚举各值；事件 `data`；`@tc.desc` 写清 length/range（PR45077 实锤：moduleName/sessionId/message/`isStrideAlignment`/CliToolEvent）
- [ ] **一批尽善尽美（CASE-QUALITY · PR45112）**：需求表逐行有真实调用；未把「白名单=不涉及」当整接口跳过；SDK 缺符号/需无权限 rely 已先报用户（更新 SDK 或另起 rely），无静默省略；201 等权限码有硬断言而非仅 OR；会话已有条目×用例对照表
- [ ] **Assist 全套再结论**：`Test.json` kit 未齐装时 **禁止**把缺模块 Error 当用例失败写进报告；门禁缺 Assist → `pack … --resign` 同签补包

## E. 加固批次附加（ArkTS）

- [ ] `audit_key_sync.py` 非 static **0** 未同步
- [ ] `--scan-page-inspector` 页面内无旧 key
- [ ] changelog 与改动文件一致

## F. Git 提交（通用）

- [ ] `git commit -sm` + Signed-off-by
- [ ] `git log -1 --format=full` 已核对
- [ ] 未提交 `root/`、IDE 点开头的本地配置目录等无关路径
- [ ] skill 文档已通过 `scan_wordstool_docs.py`（WordsTool 文档用词，规则号 .297 / .241 / doc1）
- [ ] **WordsTool.97**：资源 `string.json` / 用例勿写易歧义产品字体名；字体族用 `sans-serif`（`gate_review` 可自动替换）
- [ ] **WordsTool.66**：用例号/`it()`/路径/json 键勿含易歧义双字符片段（uuid 常见）；改为语义化 `SUB_*`
- [ ] **WordsTool.100**：`.ets` 勿写易歧义厂商品牌域名（CDN host）；属性桩页 `Web(src)` 用 `$rawfile('…')`，勿复制主测页厂商 URL
  - before: 桩页 `Web` 的 `src` 写成厂商 CDN
  - after: `Web({ src: $rawfile('common_index.html'), controller: … }).enableXxx(null)`
- [ ] **WordsTool.177**：用例注释/id/`it()` 勿裸写易歧义独立词；错误码注释 `may … as`→`commonly returns`；图形场景改 host/TEXTURE（PR44704；`fix_wordstool_177`）
- [ ] **G.OBJ.04（ETS）**：简单字面量键优先点号：`want?.parameters?.['withGroupId']`→`want?.parameters?.withGroupId`；PascalCase 协议键保留 `obj['Abstract']`（G.NAM.03；PR44704；`fix_ets_obj04`）
- [ ] **WordsTool.143 / .5**：本地开发套件缩写、a11y 全称勿裸写；改 NATIVE、a11y；本地 `tools/` 生成器可 gitignore 规避 Python nbnc
- [ ] skill 内 Python：函数嵌套深度 ≤4、nbnc 行数 ≤50（超限须拆 helper）
- [ ] skill 内 Python：G.FMT.04 无冒号前空格（切片写 `a + 1:b` 而非带空格的冒号写法）
- [ ] skill 内 Python：**docstring 勿含块注释结束符**（`PY.DOC.STARSLASH`；否则 CodeCheck 误计 FUNC.NBNC，MR675）
- [ ] skill 内 Python：**有 `__all__` 时置于 `__future__` 后、其它 import 前**（`PY.IMPORT.ORDER` / CodeCheck G.FMT.05；MR676）
- [ ] skill 内 Python / **ets_checker**：源码**禁止出现**块注释开闭写实字符；禁止含 `/` 的字面量用 `+` 拼接（G.FIO.05 / FUNC.NBNC 误报；一律 `chr`+`join`；MR676）

## G. C++ 合规（ace_engine）

- [ ] **InvalidParam 枚举勿未初始化（板测，PR44090 实锤）**
  - `BackgroundProcessManager_ProcessPriority priority;` 未赋值再传入时，现网可能非稳定 `INVALID_PARAM`
  - 正确：`static_cast<BackgroundProcessManager_ProcessPriority>(0)`（或接口人确认的非法枚举值）显式构造
- [ ] 圈复杂度 ≤20、函数 nbnc ≤50、嵌套 ≤4（NAPI `GetXxxProps` 超长表：拆多函数 + 多次 define，见 reference）
- [ ] **G.FUD.06**：头文件 `inline` 函数体（不含空行/注释）≤10 行；超限改声明 + `.cpp` 实现（见 `cpp-guide.md` 案例 15）
- [ ] **G.FMT.17-CPP**：`{` 后禁止空行（`extern "C" {` / 函数体同）；`gate_check --fix` 可自动删（见 `cpp-guide.md`）
- [ ] 行宽 ≤120（G.FMT.05）
- [ ] 函数调用实参续行 = 起始行缩进 + 4（G.FMT.06-CPP，非固定 8；如 8→12）
- [ ] CAPI `GetXxxProps` / Init 注册函数 nbnc ≤50（G.FUD.05；超限按域拆表）
- [ ] 无裸魔法数（已用 `constexpr` / 命名常量）（**G.CNS.02**）
  - CAPI NAPI：`MakeIntArray(..., 2/7)` 等定长数组长度亦须命名常量（CodeCheck 不豁免 `2`）
  - 多出参组装用 `struct` 打包，避免 **G.FUN.01-CPP** 参数过多（见 `cpp-guide.md` 案例 13）
  - **G.NAM.03-CPP**：全局/`namespace {}` 常量须 **UPPER_SNAKE_CASE**（`K_ACQUIRE_RESULT_LEN`）；禁止 `kCamelCase`
  - 错误码：`ASSERT_EQ(NAME, 103306)` 仍算裸字面量；数值只放在命名 `constexpr`，用例侧用 `ASSERT_NE`/`ASSERT_EQ` 对命名常量或 SDK 枚举
  - 枚举 smoke：`ASSERT_EQ(ENUM, 106211)` / `ASSERT_EQ(PROP, 11)` 同属 **G.CNS.02**；优先 `ASSERT_EQ(A != B, true)` 互比（见 `cpp-guide.md` 案例 14）
  - stub/回调：`401`/`-1` 改用已有 `INVALID_PARAM` / `PARAM_NEGATIVE_1`
  ```cpp
  // bad
  ASSERT_EQ(DIALOG_ERR_NODE_MOUNT_FAILURE, 103306);
  ASSERT_EQ(OH_ARKUI_ANIMATION_PROPERTY_OPACITY, 11);
  callback(401, -1, userData);
  // good（数值仅在 Compat.h：constexpr int32_t DIALOG_ERR_... = ...）
  ASSERT_NE(DIALOG_ERR_NODE_MOUNT_FAILURE, SUCCESS);
  ASSERT_EQ(OH_ARKUI_ANIMATION_PROPERTY_OPACITY != OH_ARKUI_ANIMATION_PROPERTY_TRANSLATION, true);
  callback(INVALID_PARAM, PARAM_NEGATIVE_1, userData);
  ```
- [ ] **WordsTool.143**：`dlopen`/路径勿裸写本地开发套件缩写；拆字面量 `"libace_n" "dk.z.so"`（案例 14）
- [ ] **WordsTool.204**：源码/CMake 注释勿写 C++ 运行时库短名；改「C++ standard headers / C++ standard library」
- [ ] 非头文件 NBNC ≤2000（超限拆 Extra/Init；CMake/`BUILD.gn` 同步登记）
- [ ] 头文件 nbnc 未超标（大实现已迁 `.cpp` + `BUILD.gn` 已注册）
- [ ] 新/改文件含 Apache 2.0 许可证头（OAT.3）
- [ ] 无注释掉的大段废弃代码
- [ ] 局部变量/成员 lowerCamelCase；**全局常量 UPPER_SNAKE_CASE**（**G.NAM.03-CPP**，勿 `kXxx`）

## H. Inspector 行为不变（C++）

- [ ] `UpdateInspectorId` / `BuildXxxInspectorId` 拼接规则未改
- [ ] `__NavDestinationField__` 等前缀语义未改
- [ ] resolve key → update host → update children 顺序未变
- [ ] `git diff` 确认仅为结构拆分，无逻辑删改

## I. C++ 编译验证

- [ ] `ace_core_components_base_ng_ohos` 通过
- [ ] `libace_compatible` 通过（若改动面大）
- [ ] 无 `-Werror` unused function / 链接 undefined symbol
- [ ] struct 参数无 `const T&` 成员导致构造/赋值失败

## J. Push 后

- [ ] Git Hooks Checking **PASSED**
- [ ] CodeArts / 流水线 Quality 无新增 Critical/High

- [ ] **CI.SDK.01**：`compileSdkVersion` 须完整 M.S.F 且对齐 **api_full_version**（现 `"26.0.1"`；禁数字/`"26"`/过期 `"26.0.0"`）
- [ ] **CI.HVIGOR.01**：hvigor/oh-package modelVersion 禁止 6.0.0，须 26.0.0（req4/5/6 CI 实锤；与 compileSdk 的 api_full 不是同一字段）

### G.TYP.04 字符串单引号
- 普通字面量用单引号；内容含裸 `'` 时保留双引号。
- 双引号串内 `\"` 转单引号后应变为字面 `"`（勿残留反斜杠）。
- `fix_ets_file` / `dq_to_sq` 自动修复（uiCompare 实锤）。

### WordsTool.86
- 标识符勿含 forbidden status-log id；改 `statusMsg` / `logMsg`。
- `fix_wordstool_86`：rename to statusMsg（uiCompare 实锤）。

### WordsTool.177 + G.OBJ.04（PR44704）
- 注释勿写易歧义独立词；`may … as 16000011`→`commonly returns 16000011`。
- 简单属性：`?.['withGroupId']`→`?.withGroupId`；计算属性与 PascalCase 协议键保留 `[]`。
