# 本地验板 = 门禁同签（禁混签 / 禁自造证书）

> 动/静 XTS 共用。目标：**本地测绿 ≡ 下载门禁产物测绿**，不再因 9568332 返工。

## 门禁实际怎么签（唯一真相）

来源：`build/ohos_var.gni` + `build/scripts/app_sign.py`

| 项 | 值 |
|----|-----|
| keystore | `developtools/hapsigner/dist/OpenHarmony.p12` |
| appCert | `developtools/hapsigner/dist/OpenHarmonyApplication.pem` |
| keyAlias | `OpenHarmony Application Release` |
| profile | **工程内** `signature/openharmony_sx.p7b`（`certificate_profile`） |
| 密码 | `123456` |

**禁止**为交付验板去：`generate-keypair`、hapbuild `autosign/`、`/tmp/xts_sign` 临时证书、signing-materials 另造 app 证。那些 app 证书与门禁不一致 → 同 bundle 混装 **9568332**。

## 一键（CI 同签）

```bash
# 单 HAP
python3 xts_shared/sign_ci_identical.py <unsigned.hap> <工程根>
# 或工程下全部 unsigned
python3 xts_shared/sign_ci_identical.py --project <工程根>

# Test.json 全套 kit（含 Assist/Rely）打 zip
python3 xts_shared/pack_xdevice_assist_haps.py <含Test.json工程> --resign --out /tmp/kit.zip
```

`--resign` **已改为**调用 `sign_ci_identical`（不再用 sign_one/tmp xts_sign）。

## PR 本地交付验板（与下门禁包同效力）

```bash
python3 xts_shared/pr_local_verify.py \
  --repo /path/xts_acts_0622 \
  --projects path/to/projA path/to/projB \
  --out /tmp/pr_verify_out
# 或 --from-diff origin/master 自动发现改动工程
```

脚本强制：

1. 解析 Test.json **完整** AppInstallKit（禁只装 Assist）  
2. 对每个 owner **CI 同签**  
3. `aa test` **全模块**（禁 `-s class` 过滤当交付）  
4. 产出合并 `summary_report.html` + `summary_top.png`  

失败 → 读 log 修码 → 重跑；**禁止**未绿就写「测试通过」。

## Agent 铁律

1. 交付验板只用 `sign_ci_identical` / `pack … --resign` / `pr_local_verify`。  
2. **禁止**「门禁 SyncTest + 本地 hapbuild 签 Assist」混装说明。  
3. **禁止**仅跑 NoPerm/单 class 就宣称模块绿。  
4. PR 描述须贴 `summary_top.png`（或等价 xdevice 汇总截图）；见 **gitcode-pr** / **PR-DELIVER.md**。  

## 实战

- 2026-10-31 PR44817：hapbuild 签 Assist + 门禁 SyncTest → 9568332；改为 dist+p7b 同签后 CreateModule 15/15，且可与门禁产物混用。  
