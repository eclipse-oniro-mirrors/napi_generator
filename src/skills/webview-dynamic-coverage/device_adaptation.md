# 设备 / SDK 适配说明（webview-dynamic ACTS）

补测在 **真机 OpenHarmony 7.x** 上通过时，若 native / NAPI 未齐，页面与断言需按下列规则降级；**不得**静默删用例，须在报告 **状态/说明** 列写明原因。

## 云服务块（WebCustomErrorCode）

| API / 场景 | 现象 | 页面 / 断言策略 |
|------------|------|-----------------|
| `WebSchemeHandlerResponse.set/getCustomErrorCode` | 日志 `OH_ArkWebResponse_Set/GetCustomErrorCode not found` | getter 常返回 **0**；J/M 等维度假期 **0** 或 **true**（接口触达） |
| `WebResourceHandler.didFail` 三参（含 custom error） | `CreateErrorInfo not found` → **17100021** | **try/catch** 后回退 **两参 didFail**；N 维仍断言文档码时在 catch 路径说明 |
| `WebResourceResponse.setResponseBody` | 部分类型回传 `ACTION undefined` | 调用 API 后回传 **`ok-i` / `ok-k` / `ok-m`**；L 维可用 **`spec-ok`** |
| `WebResourceError.getCustomErrorCode` | custom 未就绪 | scheme + `onErrorReceive`；fallback 路径；L 维 **`spec-ok`** |

系统补齐 **26.x** ArkWeb NAPI 后，应收紧断言（如 **32159**、具体 boolean），并更新本表。

## OH 块（WebMonitoredBlankScreen）

| 矩阵 / Excel | SDK 实际 | 实现要点 |
|--------------|----------|----------|
| `BlankScreenReason` / `MonitoredBlankScreenEventInfo` | `web.d.ts` / `@ohos.arkui.component` | 从 **`@ohos.arkui.component`** 导入，**禁止**页面内自建 enum |
| `WebAttribute.onMonitoredBlankScreen` | 与 `onDetectedBlankScreen` 并存 | Web 上注册 **`onMonitoredBlankScreen`**；检测类场景仍可用 **`onDetectedBlankScreen`** |
| `DetectedBlankScreenReason` | 与 Excel `BlankScreenReason.*` 一一对应 | I/J 维通过 **emit 固定 reason 值** 触达 |

## 编译

- **动态 ACTS**：**勿**设置 `OHOS_USE_HVIGOR_STATIC=1`（与 **ohxtsstatic** 区分）。
- SDK：**normal**（`source use-ohos-sdk.sh normal`）即可。

## 跑测前同步 HAP

`ohbuild build-acts` 产物在 `out/<product>/suites/haps/`；xdevice 默认从 `suites/acts/acts/testcases/` 取包。**必须**将新编 HAP 拷入 testcases，否则设备可能装旧包（见 **run_webview_dynamic_pipeline.py sync-haps**）。
