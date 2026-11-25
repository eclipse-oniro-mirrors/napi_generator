---
name: ohexcel
description: "从文件夹内招生/排名类表格图片 OCR 识别并导出 Excel；按行背景色标注 985（绿色）、211（蓝色）、双一流（黄色）。入口 ohexcel.py img-to-excel。"
author: "Created by user"
created: "2026-07-07"
version: "1.0.0"
---

# ohexcel：图片表格 → Excel

将指定文件夹内的 **JPG/PNG** 等表格截图，通过 **OCR + 行背景色识别** 合并导出为 **Excel**。

典型场景：**江苏高考 985/211 录取分数排名** 类小红书长图（见 **`img/`** 示例）。

## 功能

| 能力 | 说明 |
|------|------|
| 批量 OCR | 扫描 **`--img-dir`** 下图片，按文件名 `_1_`、`_2_` … 自然排序 |
| 表格列 | **序号、院校名称、投档最低分、最低投档排名** |
| 院校层次 | 按行背景色识别并写入 **院校层次 / 是否985 / 是否211** |
| 去重合并 | 多图按 **序号+院校名称** 去重后写入一个 xlsx |
| Excel 着色 | 985 行浅绿、211 行浅蓝、双一流行浅黄（与源图对应） |

### 颜色规则（与示例图一致）

| 行背景色 | 院校层次 | 是否985 | 是否211 |
|:---|:---|:---|:---|
| 绿色 | 985 | 是 | 是 |
| 蓝色 | 211 | 否 | 是 |
| 黄色 | 双一流 | 否 | 否 |
| 其他 | 其他 | 否 | 否 |

## 依赖

在 **napi_generator 仓库根** 执行：

```bash
pip install -r src/skills/ohexcel/requirements.txt
```

（**openpyxl**、**rapidocr-onnxruntime**、**opencv-python-headless**、**numpy**、**Pillow**。）

## 命令

```bash
# 默认识别 src/skills/ohexcel/img/，输出到 src/skills/ohexcel/output/admission_<时间戳>.xlsx
python src/skills/ohexcel/ohexcel.py img-to-excel

# 指定图片目录与输出文件
python src/skills/ohexcel/ohexcel.py img-to-excel \
  --img-dir src/skills/ohexcel/img \
  --out build/2025_jiangsu_985_211.xlsx \
  --title "2025年江苏高考985/211本科批录取分数排名"
```

| 参数 | 说明 |
|------|------|
| **`--img-dir`** | 图片文件夹（默认 **`src/skills/ohexcel/img`**） |
| **`--out`** | 输出 **`.xlsx`** 完整路径；省略则写入 **`output/admission_<timestamp>.xlsx`** |
| **`--title`** | Excel 首行标题 |

## 目录结构

```
src/skills/ohexcel/
  ohexcel.py          # 入口脚本
  SKILL.md
  README.md
  requirements.txt
  img/                # 示例图片（自备）
  output/             # 默认输出目录（自动生成）
```

## 提示词示例

| 场景 | 说法 |
|------|------|
| 默认识别 | 「用 ohexcel 把 img 文件夹里的图片生成 Excel」 |
| 指定目录 | 「识别 gaokao/2025 下的投档线图片，导出 Excel，绿色 985、蓝色 211」 |
| 指定输出 | 「ohexcel img-to-excel --out 录取分数.xlsx」 |

## 限制与说明

- OCR 对模糊、水印、非标准表头图片可能有个别错字，生成后请抽查关键院校。
- 当前列宽/x 区间针对 **四列排名表**（序号 | 校名 | 分数 | 位次）优化；其他版式可能需调整 **`COL_RANGES`**。
- **`output/`** 与 **`img/`** 内大文件建议勿提交 Git（可按需在 **`.gitignore`** 中忽略 **`output/`**）。

## Agent 使用说明

1. 确认已 **`pip install -r src/skills/ohexcel/requirements.txt`**。
2. 在仓库根运行 **`python src/skills/ohexcel/ohexcel.py img-to-excel --img-dir <目录> [--out …]`**。
3. 将生成的 xlsx 路径回报给用户。
