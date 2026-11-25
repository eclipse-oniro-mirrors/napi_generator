---
name: gktd
description: >-
  江苏高考：从招生计划 PDF（普通类物理等科目）OCR 提取专业组/专业/计划数/学制/学费，
  按院校代号+专业组匹配并扩表合并到投档线 Excel。入口 gktd.py merge。
  Use when user mentions gktd、投档线扩表、招生计划合并专业、26高考专业和投档线。
---

# gktd：招生计划 + 投档线扩表

将 **江苏招生计划专刊 PDF**（普通类·物理等科目·本科页）经 OCR 解析后，按 **院校代号 + 专业组号** 匹配 **投档线 Excel**，在原表每行后追加专业明细列，生成新表。

## 功能

| 能力 | 说明 |
|------|------|
| PDF OCR | 渲染指定页 → RapidOCR；结果缓存 `_plan_ocr_cache.json`，可断点续跑 |
| 双栏解析 | 按 x 坐标分区：院校专业组 / 专业名称及备注 / 计划数 / 学制 / 学费 |
| 匹配键 | 投档线「院校代号」+ 名称中 `NN专业组` ↔ 计划书 `XXXX` + `NN` |
| 扩表列 | **专业组名称、专业代码、专业名称及备注、计划数、学制、学费**；按 PDF **专业代码** 分行 |
| 计划表 | 同步导出 `26招生计划_物理本科.xlsx`（代号/院校专业组/专业代码/专业名称及备注/计划数/学制/学费） |
| 重解析 | 缓存页齐全时默认跳过 OCR，仅重解析写表 |

### 默认页范围（2026 上册·物理本科）

| 参数 | 默认 | 说明 |
|------|------|------|
| `--page-start` | 119 | 普通类物理本科起 |
| `--page-end` | 260 | 普通类物理本科止 |

提前批物理约在 100–118；民办/部分院校若在下册则本技能上册范围无法覆盖。

## 依赖

在 **napi_generator 仓库根** 执行：

```bash
pip install -r src/skills/gktd/requirements.txt
```

（**pymupdf**、**openpyxl**、**rapidocr-onnxruntime**、**opencv-python-headless**、**numpy**。）

Windows 建议：

```powershell
$env:PYTHONIOENCODING='utf-8'; $env:PYTHONUTF8='1'
```

## 命令

```bash
# 默认：解析计划表 + 合并投档线
python src/skills/gktd/gktd.py merge --work-dir gaokao/toudang

# 仅导出招生计划 xlsx
python src/skills/gktd/gktd.py plan --work-dir gaokao/toudang

# 指定路径与页码
python src/skills/gktd/gktd.py merge \
  --work-dir gaokao/toudang \
  --pdf "gaokao/toudang/【压缩版】2026年江苏招生计划（上册）.pdf" \
  --toudang "gaokao/toudang/26年高考投档线.xlsx" \
  --out "gaokao/toudang/26高考专业和投档线.xlsx" \
  --page-start 119 --page-end 260

# 强制重新 OCR（忽略完整缓存）
python src/skills/gktd/gktd.py merge --force-ocr
```

| 参数 | 说明 |
|------|------|
| **`--work-dir`** | 工作目录（PDF/投档线/缓存/输出，默认 `gaokao/toudang`） |
| **`--pdf`** | 招生计划 PDF；省略则取 work-dir 下唯一 `*.pdf` |
| **`--toudang`** | 投档线 xlsx；省略则取 `*投档线.xlsx` |
| **`--out`** | 输出 xlsx；默认 `work-dir/26高考专业和投档线.xlsx` |
| **`--page-start` / `--page-end`** | OCR 页码（1-based） |
| **`--dpi`** | 渲染 DPI（默认 120） |
| **`--force-ocr`** | 强制重新 OCR |

## 输入 / 输出约定

**投档线表**（数据从约第 6 行起）：

| 列 | 内容 |
|----|------|
| A | 院校代号 |
| B | 院校、专业组（再选科目要求） |
| C… | 投档最低分及同分排序列 |

**输出新增列**（接在原表右侧）：专业组名称、**专业代码**、专业名称及备注、计划数、学制、学费。  
按招生计划 PDF 中的 **专业代码**（如 38 建筑学、39 工程管理）分行；投档分等字段逐行重复。

**招生计划中间表** `26招生计划_物理本科.xlsx`：

| 列 | 说明 |
|----|------|
| 代号 | 院校代号 |
| 院校、专业组（再选科目要求） | 专业组标题 |
| 专业代码 | PDF 专业序号 |
| 专业名称及备注 | 专业名 |
| 计划数 / 学制 / 学费 | 对应列 |
| 组备注 | 专业组说明（仅首专业行） |

**工作目录副产物**：

- `_plan_ocr_cache.json` — 按页 OCR 块缓存（可续跑）
- `_plan_physics_parsed.json` — 解析后的专业组字典

## Agent 执行要点

1. 先读本 `SKILL.md`，再跑 `gktd.py merge`。
2. 全量 OCR 耗时长（约数十秒/页），优先利用已有缓存；改解析逻辑后无需 `--force-ocr`。
3. 匹配率未满 100% 属常见（OCR 漏字、下册院校、特殊项目组）；报告 matched/unmatched 即可。
4. 勿把体积巨大的 PDF / OCR 缓存默认提交进 git，除非用户明确要求。

## 提示词示例

| 场景 | 说法 |
|------|------|
| 默认扩表 | 「用 gktd 把招生计划和投档线合成专业明细表」 |
| 指定目录 | 「对 gaokao/toudang 跑 gktd merge」 |
| 改页码 | 「gktd 只扫 PDF 第 200–260 页再合并」 |

## 目录结构

```
src/skills/gktd/
  gktd.py             # 入口
  SKILL.md
  requirements.txt
```
