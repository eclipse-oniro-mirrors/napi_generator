# ohxtsdynamic：动态 ArkUI（V2）XTS 编译与运行期排障速查

与 **`SKILL.md`** 配套。覆盖 **第一层**；测试范式见 **`arkui-dynamic-xts-generator/categories/`**、**`common/`**。

---

## 1. 编译阶段（`@ComponentV2` / 动态 ArkTS）

| 现象 / 报错摘要 | 常见原因 | 处理方向 |
|-----------------|----------|----------|
| `ChipV2` / `ChipGroupV2` 未定义 | 使用了 **static SDK** 或 SDK 版本 < 26 | `source /root/aiSkill/use-ohos-sdk.sh normal`；确认 `compileSdkVersion: 26` |
| 误用 `'use static'` | 动态高级组件需 **V2 状态管理** | 页面用 `@ComponentV2`、`@Local`/`@Param`/`@Event`；勿加 `'use static'` |
| `Property 'getString' does not exist on type 'Object'` | Inspector 链式中间变量类型丢失 | 整条链式调用，避免中间 `Object` 变量 |
| `ON.id().click()` | 对匹配器误调 `click` | `findComponent(ON.id('x'))` 再 `click()` |
| `expect(a?.b).assertEqual` | 可选链不宜直接进 `expect` | `if (a) { expect(a.b).assertEqual(...) }` |
| 导入 `@kit.ArkUI` 失败 | **OHOS_SDK_PATH** 未指向 normal/26 | 检查 `$OHOS_SDK_PATH/linux/ets` 存在；运行 `ohxtsflow.py env` |
| 使用了 **hvigor-static** | 动态工程应走默认 **hvigor** | **取消** `OHOS_USE_HVIGOR_STATIC`；勿设 `OHOS_HVIGORW_JS` 为 static 路径 |
| `SymbolGlyphModifier` 找不到 | 需从 `@ohos.arkui.modifier` 导入 | 对照工程内已有页面 import |

---

## 2. 运行期 / Hypium / 设备

| 现象 | 常见原因 | 处理方向 |
|------|----------|----------|
| 路由失败 | `main_pages.json` path 与 `router.pushUrl` url 不一致 | ACTS 工程常用 `MainAbility/pages/...`，逐字对齐 |
| `getInspectorByKey` 失败 | 组件无 **id** 或页面未加载完 | `CommonFunc.sleep`；`beforeEach` 中确认 `router.getState().name` |
| Chip 在 Wearable 上异常 | 文档声明 **Wearable 不支持** | 本工程为 **nowear**，确认 `deviceTypes` 与跑测设备匹配 |
| AppStorage 残留 | 多套件串跑 | `afterEach` 清理本套件键 |
| 日志难过滤 | 未统一前缀 | 使用 **`[ARKUI_DYN]`** 或套件内 `LOG_TAG` |

---

## 3. 环境自检命令

```bash
source /root/aiSkill/use-ohos-sdk.sh normal
python3 /root/aiSkill/.claude/skills/ohxtsdynamic/ohxtsflow.py env
```

### 3.1 设备测试前准备（每次必做，防"全超时"假象）

```bash
# ① 唤醒 + 防锁屏（重启/冷启后必做，否则 UiTest 找不到组件、全部用例 timeout）
hdc shell "power-shell wakeup; power-shell setmode 602; power-shell timeout -o 999999"
# ② 清理残留测试应用（后台残留会污染 log / AAMS 连接冲突 17000001/17000002）
hdc shell "bm dump -a 2>&1 | grep -E 'com\.(open\.harmony|page|acts)'"   # 列出残留
hdc shell "bm uninstall -n <残留bundle>"                                   # 逐个卸载
hdc shell a​a force-stop <被测bundle>
# ③ 校验屏幕态（须 AWAKE）
hdc shell "hidumper -s PowerManagerService -a '-s' | grep 'Current State'"
```

### 3.2 用例超时快判（禁止硬等 240s）

| 规则 | 说明 |
|------|------|
| 单条用例 **>60s** 无 `consuming` 输出 | 流程已卡死，**立即中止**整轮，查因后再跑 |
| 定位卡点 | `hdc shell "hilog -x \| grep <用例名>"` —— 看最后一条日志停在哪（权限弹窗未点 / 事件未回 / 页面未加载） |
| 全用例同步卡死 | 先查**屏幕态**（§3.1），再查权限（§2.1），最后才查代码 |
| 设备 unittest 参数 | `-s timeout 120000`（120s 上限足够，超时即视为失败） |

---

## 4. 异常参数 XTS（undefined / null）

完整流程见 **[abnormal-options-xts.md](abnormal-options-xts.md)**。

| 现象 / 报错 | 原因 | 处理 |
|-------------|------|------|
| 主包 `Cannot find name 'expect'` | `expect` 仅 **ohosTest** 可用 | 断言放 `test/common/AbnormalAssertHelper.ets`；主包只保留 `AbnormalInspectorHelper.ets` |
| 探测页 `enabled: undefined` 也编不过 | 缺 **必填 `label`** | 探测块加 `label: this.lbl('p')` |
| `',' expected`（ChipGroupV2） | `items` 行后**缺逗号** | 多属性时每行以 `,` 结尾 |
| `multiple properties with the same name` | `ChipGroupV2Item` **重复 label** | body 已是 `new ChipGroupV2Item({...})` 时直接 `items: [body]` |
| 批量探测 0 通过 | 同文件多探测 + 错误行干扰 | 用 `compile_probe_matrix.py` **逐条单独编译** |
| 设备大量 Fail、本地刚编过 | **旧 HAP 未卸载** | clean build + 卸载 + `deploy-test` 重装 |
| 起测即 `App died` / Ability 起不来 | **双 HAP 只编了 ohosTest**（`build-test`）或未装主包 | `ohxtsflow build-all`（build+build-test+sign）→ `deploy-test` 装主+测；校验两份 `*-signed.hap` |
| 改了页面仍跑旧 UI / 假绿 | **主包过期**（只重编测包）或**改码未重编** | 过期 HAP **被删除**；须 `build-all`；`ohxtsflow deploy-test` 缺包时自动重编，**禁止用旧包** |
| `NO_RESULT` / 无 `OHOS_REPORT_RESULT` | 装包失败、锁屏、只装测包 | 解锁设备；双包重装；**禁止**当环境偶发略过 |
| **重启/冷启后全部用例 timeout、按钮全找不到**（`buttonConmponent is null`） | **灭屏 / 锁屏**：UiTest 只能找焦点窗口组件 | 测试前 `power-shell wakeup` + `power-shell setmode 602` + `power-shell timeout -o 999999`；**禁止**在灭屏状态跑测 |
| **单条用例 >60s 未完成**（Hypium 无 `consuming` 输出） | 流程卡死（权限弹窗未点、事件未回、页面未加载） | **立即中止**查因（hilog grep 用例名找卡点），**禁止**等 240s 超时耗整轮 |
| `requestPermissionsFromUser` 返回 `authResults:[2]`、`dialogShownResults:[false]` | **受限权限不弹窗**（READ_PASTEBOARD 等），直接拒绝 | 见 **§2.1 受限权限授权三件套**——**先查权限，勿改代码** |
| PBS 日志 `IsPermissionGranted# permission denied` / `GetPasteDataInner# check permission failed` | 剪贴板权限未授予 → copy/paste 静默失效 | **§2.1**：copy 后剪贴板 `records:0`、paste 后 input 仍空均为此症 |
| ATM 日志 `Perm(...) need acl` / `Acl of ... is invalid` | **profile 的 `acls.allowed-acls` 缺该权限** | profile 加 `allowed-acls` 后**重签双包**（主+测同一 profile，否则 `module name not found`） |
| 装包 `9568289` `grant request permissions failed` | 安装时授权受限权限失败：profile ACL 未授权 **或** 设备 install_list 未注册 | **§2.1** 三步逐查；多 HAP 见 **§2.2** |
| 装包 `9568332` `sign info inconsistent` | 同 bundle 的 Test/Main(/Form) **证书不一致**（常只换测包） | **§2.2** 成套同签替换；先 `bm uninstall -n <bundle>` |
| 装包 `9568286` | release/debug 类型混装 | 全套 **release**；见 **§2.2** |
| xdevice `unavailable`（kits 含 Main+Test） | 本地板拒装 CI 原包 / 混签；**非**工程结构错误 | **`xts_shared/pack_xdevice_assist_haps.py --resign`**；**勿**合并成单 HAP；**CI 不阻塞** |
| `module name is not found`（设备 unittest） | 主/测 HAP 用了**不同 profile** 签名 | 统一 profile 重签双包后 `bm uninstall` + 重装 |
| 装包 `9568450` / `9568289` | release 包用了 `-g`，或 PASTEBOARD 未进 profile ACL | `hdc install` 无 `-g`；profile 加 restricted-permissions |

### 2.1 受限权限授权三件套（READ_PASTEBOARD 等）

**背景**：受限权限（如 `ohos.permission.READ_PASTEBOARD`）在设备上**不弹授权框**（`requestPermissionsFromUser` 直接返回 `authResults:[2]`、`dialogShownResults:[false]`）。代码侧动态请求 + module.json5 静态声明（原仓库写法）**都是对的**；本地拿不到权限几乎都是**签名 profile 与设备白名单**问题。**判定链**（hilog）：

```bash
# ① 动态请求结果：authResults:[2] + dialogShownResults:[false] → 受限权限不弹窗
hilog | grep "authResults"
# ② PBS 剪贴板拒绝（copy/paste 静默失效的实锤）
hilog | grep -E "IsPermissionGranted|GetPasteDataInner"
# ③ ATM ACL 拒绝（profile 缺授权的实锤）
hilog | grep -E "need acl|Acl of .* is invalid"
# ④ 安装期授权失败
hdc install xxx.hap   # 报 9568289 grant request permissions failed
```

**三步修复**（前两步为签名侧，第三步为设备侧；CI 设备已配置，仅本地需做）：

1. **签名 profile 授权**：`UnsgnedReleasedProfileTemplate.json` 同时加两处，重新 `sign-profile` 并**重签主+测双包**（同一 profile）：
   ```json
   "acls": { "allowed-acls": ["ohos.permission.READ_PASTEBOARD"] },
   "permissions": { "restricted-permissions": ["ohos.permission.READ_PASTEBOARD"] }
   ```
   只加 restricted-permissions 不够——ATM 报 `need acl` 即 allowed-acls 缺失。
2. **bundle-name 与签名指纹**：模板 bundle-name = 工程 `AppScope/app.json5` 的 bundleName；指纹从已装主包取：`bm dump -n <bundle> | grep appId`（`_` 后部分）。
3. **设备 install_list 注册**：`/system/etc/app/install_list_permissions.json`（ext4 rw 可改）追加：
   ```json
   { "bundleName": "<bundle>",
     "app_signature": ["<appId 下划线后指纹>"],
     "permissions": [{ "name": "ohos.permission.READ_PASTEBOARD", "userCancellable": true }] }
   ```
   **改完必须重启设备**（BMS 启动时读一次）；验证：`grep -c '<bundle>' /system/etc/app/install_list_permissions.json`。

**验证权限已生效**（避免误判）：授权后 `requestPermissionsFromUser` 返回 `authResults:[0]`；copy 后剪贴板 `records:1`；paste 后 input 有值。

**经验铁律**：
- 测试失败**先查权限/环境，再动代码**——本次 Copy/Cut 2 用例"本地失败"实为本地签名配置缺失，代码与原仓库**零差异**；
- 本地 workaround（`compatibleSdkVersion` 数字、`: void` 注解等）**提交前必须 `git checkout -- .` 还原**；判断标准：改动仅编译适配、无逻辑变更；
- `compileSdkVersion` 字符串/数字之争、ESE71336 注解等均为**本地编译器差异**，CI 工具链不同，勿提交。

### 2.2 同 bundle 多 HAP（Main+Test[+Form]）本地交付验板 = 门禁同签（2026-10-31）

**背景**：`Test.json` AppInstallKit 常同时列出 `*Test.hap` + `*Main.hap`（及 Assist/Rely/Form）。同 `bundleName` 多 HAP **结构合理**。混签（hapbuild autosign / `/tmp/xts_sign` Assist + 门禁主包）→ **9568332**。

**门禁签名真相**：`developtools/hapsigner/dist`（OpenHarmony.p12 + OpenHarmonyApplication.pem）+ 工程 `signature/openharmony_sx.p7b`。本地交付验板必须同此材料（`sign_ci_identical`）；**禁止**自造证书。

| 步骤 | 命令 / 要点 |
|------|-------------|
| 1 最终代码编出 unsigned | 动态：`ohxtsflow build-all`；确认各 kit owner 有 unsigned |
| 2 **CI 同签**全套 | `pack_xdevice_assist_haps.py <工程> --resign`（内部调 `sign_ci_identical`）或 `pr_local_verify.py` |
| 3 全模块板测 | **禁** `-s class` 当交付；装齐 Test.json kit |
| 4 报告截图 | 合并 `summary_report.html` + `summary_top.png` → `gitcode-pr describe-report` |

**禁止**：合并 Main/Test 模块；只换一个包；本地 zip 当 CI 产物；**门禁主包 + 本地单独 Assist**；用 stage `sign_one.py`/`/tmp/xts_sign` 做 **PR 交付验板**。  
详述：**`XDEVICE-ASSIST-HAPS.md`**、**`PR-DELIVER.md`**、**SKILL §9.12**。

| 现象 / 报错 | 原因 | 处理 |
|-------------|------|------|
| `queue.shift()` 编译错误 | ArkTS 不支持 | Inspector BFS 改索引遍历 |
| 整段 `$attrs` 断言不稳定 | 含 `id` 等噪声 | 改 `assertPropSame` 单属性 |
| `Type 'null' is not assignable` | 预期行为 | 记 `abnormal_compile_failures.md`，**不提交** null 用例 |
| `chipGroupPadding.top` + `undefined` 编不过 | `Length` 非可选 | 记失败表，**不提交**该 undefined 用例 |
| **CI/GN HAP 签名失败** | 模板拷贝 p7b，bundle 与 app.json5 不一致 | **§9.11** / **`xts_shared/gen-xts-signature-p7b.sh`** |
