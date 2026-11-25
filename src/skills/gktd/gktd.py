# -*- coding: utf-8 -*-
"""gktd: 江苏招生计划 PDF(OCR) + 高考投档线 Excel 扩表合并。"""
from __future__ import annotations

import argparse
import json
import re
import time
from pathlib import Path

import cv2
import fitz
import numpy as np
from openpyxl import Workbook, load_workbook
from openpyxl.styles import Alignment, Font, PatternFill
from openpyxl.utils import get_column_letter
from rapidocr_onnxruntime import RapidOCR

SKILL_DIR = Path(__file__).resolve().parent
# 运行时由 configure() / CLI 赋值
WORK_DIR: Path = SKILL_DIR
PDF: Path | None = None
XLSX_IN: Path | None = None
XLSX_OUT: Path | None = None
CACHE: Path | None = None
PLAN_JSON: Path | None = None
PLAN_XLSX: Path | None = None
PAGE_START = 119
PAGE_END = 260
DPI = 120

# 双栏 + 专业代码列 + 右对齐数字列（dpi=120, 页宽约1194）
COL_SPECS = {
    "left": {
        "x0": 0,
        "x1": 590,
        "mcode0": 70,
        "mcode1": 120,
        "name0": 120,
        "name1": 470,
        "plan0": 470,
        "plan1": 510,
        "year0": 510,
        "year1": 535,
        "fee0": 535,
        "fee1": 590,
    },
    "right": {
        "x0": 590,
        "x1": 1200,
        "mcode0": 600,
        "mcode1": 640,
        "name0": 640,
        "name1": 990,
        "plan0": 990,
        "plan1": 1035,
        "year0": 1035,
        "year1": 1065,
        "fee0": 1065,
        "fee1": 1200,
    },
}

GROUP_RE = re.compile(
    r"(?P<code>\d{4})(?P<headgrp>\d{0,2})\s*[|｜]?\s*"
    r"(?P<title>[\u4e00-\u9fffA-Za-z0-9（）()·\-]{0,40}?(?P<grp>\d{2})专业组\s*[（(][^）)]+[）)])"
)
SCHOOL_RE = re.compile(
    r"(?P<code>\d{4})\s*(?P<name>[\u4e00-\u9fffA-Za-z（）()·\-]{2,40}?(?:大学|学院|学校))"
)
YEAR_MAP = {"四": "4", "五": "5", "六": "6", "七": "7", "八": "8"}
SKIP_LINE = re.compile(
    r"^(?:代号|院校、专业组|计划专刊|普通高校计划|凡院校名称|·\d+·)|(?:^学\s*制$|^学\s*费$|划$)"
)
NOTE_LINE = re.compile(
    r"^(以下|备注|注：|报考|须查阅|详询|学习地点|第三[、,，]|第四|专业除|间学费|"
    r"高考报名|学员入校|入学后|进行注册|业生[，,]|求[，,]|生章程|对象应符合|"
    r"只招收该校|具体培养模式|该校要求|该类内|分流时)"
)
MAJOR_HINT = re.compile(
    r"(学|工程|技术|类|班|医学|药学|护理|设计|科学|管理|经济|贸易|金融|"
    r"会计|法学|教育|新闻|外语|英语|日语|俄语|德语|法语|西班牙语|意大利语|"
    r"自动化|计算机|软件|通信|电子|电气|土木|机械|材料|化学|物理|数学|"
    r"生物|环境|能源|交通|建筑|城乡|风景|艺术|表演|音乐|舞蹈|美术|体育)"
    r"[）)]?★?$|★$|（中外合作办学）"
)


def render_page(doc, page_idx: int) -> np.ndarray:
    page = doc.load_page(page_idx)
    mat = fitz.Matrix(DPI / 72, DPI / 72)
    pix = page.get_pixmap(matrix=mat, alpha=False)
    img = np.frombuffer(pix.samples, dtype=np.uint8).reshape(pix.height, pix.width, pix.n)
    if pix.n == 4:
        img = cv2.cvtColor(img, cv2.COLOR_RGBA2BGR)
    elif pix.n == 3:
        img = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)
    return img


def ocr_page(ocr: RapidOCR, img: np.ndarray) -> list[dict]:
    result, _ = ocr(img)
    blocks = []
    if not result:
        return blocks
    for box, text, score in result:
        text = (text or "").strip().replace(" ", "")
        if not text:
            continue
        xs = [p[0] for p in box]
        ys = [p[1] for p in box]
        blocks.append(
            {
                "x": float(sum(xs) / 4),
                "y": float(sum(ys) / 4),
                "text": text,
                "w": float(max(xs) - min(xs)),
            }
        )
    return blocks


def cluster_lines(blocks: list[dict], y_tol: float = 12) -> list[list[dict]]:
    blocks = sorted(blocks, key=lambda b: (b["y"], b["x"]))
    lines: list[list[dict]] = []
    for b in blocks:
        if not lines or abs(b["y"] - lines[-1][0]["y"]) > y_tol:
            lines.append([b])
        else:
            lines[-1].append(b)
    for ln in lines:
        ln.sort(key=lambda b: b["x"])
    return lines


def _zone(b: dict, spec: dict) -> str:
    x = b["x"]
    if spec["mcode0"] <= x < spec["mcode1"]:
        return "mcode"
    if spec["plan0"] <= x < spec["plan1"]:
        return "plan"
    if spec["year0"] <= x < spec["year1"]:
        return "year"
    if spec["fee0"] <= x < spec["fee1"]:
        return "fee"
    if spec["name0"] <= x < spec["name1"]:
        return "name"
    if spec["x0"] <= x < spec["mcode0"]:
        return "mcode"
    return "other"


def _ocr_fix_digits(t: str) -> str:
    """OCR 数字常见混淆；仅在作前缀时把 + 当 4。"""
    t = (t or "").strip().replace(" ", "")
    if t.startswith("+"):
        t = "4" + t[1:]
    t = (
        t.replace("l", "1")
        .replace("I", "1")
        .replace("|", "1")
        .replace("O", "0")
        .replace("o", "0")
        .replace("B", "8")
        .replace("S", "5")
    )
    # 尾部杂讯 +
    t = t.rstrip("+")
    return t


def _norm_year(t: str) -> str:
    if t in YEAR_MAP:
        return YEAR_MAP[t]
    if re.fullmatch(r"[4-8]", t):
        return t
    return ""


def _norm_fee(t: str) -> str:
    raw = (t or "").strip()
    truncated = raw.endswith((")", "）"))
    t = _ocr_fix_digits(raw.replace("O", "0").replace("o", "0"))
    t = t.rstrip(")）")
    # PDF 学费为 0/空白时 OCR 常成 ()
    if raw in ("()", "（）", "0", "00", "000"):
        return "0"
    # 605) → 6050
    if truncated and re.fullmatch(r"\d{3}", t):
        t = t + "0"
    if re.fullmatch(r"\d{3,6}", t):
        return t
    if t in ("-", "—", "免", "待定"):
        return t
    return ""


def _norm_plan(t: str) -> str:
    t = _ocr_fix_digits(t)
    if re.fullmatch(r"\d{1,4}", t):
        v = int(t)
        if 1 <= v <= 999:
            return str(v)
    return ""


def _norm_mcode(t: str) -> str:
    """专业代码：通常 01–99；OCR 可能带括号/混淆。"""
    t = _ocr_fix_digits(t)
    m = re.fullmatch(r"[（(]?(\d{1,2})[）)]?", t)
    if m:
        return m.group(1).zfill(2)
    return ""


FRAG_START = re.compile(
    # 仅匹配明显的行中折断/续行，不要用「人/理/学」等可作专业开头的单字
    r"^(?:术|区|路|境|造|河|位|项|程|专|内|间|上|下|该|"
    r"士|型|才|培|养|目|只招|报考|详询|"
    r"[）)\uFF09]|[（(\uFF08]|、|，|和|与|及|的|等|；)"
)
MAJOR_START = re.compile(
    r"^(?:[\u4e00-\u9fff]{2,12}(?:学|工程|技术|类|班|医学|管理|经济|设计|科学)|"
    r"工科试验班|理科试验班|文科试验班|人工智能|计算机|软件工程|电子信息|"
    r"自动化|临床医学|口腔医学|预防医学|护理学|建筑学|经济学|金融学|"
    r"飞行器|低空技术|新能源|集成电路|网络空间|生物医学|材料科学)"
)


def _is_major_start_name(name: str) -> bool:
    """是否像新专业标题开头（排除校区说明/备注残片等伪匹配）。"""
    if not name:
        return False
    # 备注折行常见起字，绝不当专业开头（勿含「生」——生物医学/生物科学）
    if re.match(r"^[础沿院才设教仲料英制国交项按赴]", name):
        return False
    if re.search(r"校区学习|学年在|须查阅|详询|招生章程", name) and "学制" not in name:
        return False
    if name.startswith(("以下", "备注", "注：", "报考该", "京校区", "南校区", "将军路")):
        return False
    return bool(MAJOR_START.search(name))


def _paren_open(s: str) -> bool:
    return (s.count("（") + s.count("(")) > (s.count("）") + s.count(")"))


def _is_name_incomplete(prev: str) -> bool:
    if not prev:
        return False
    return bool(
        _paren_open(prev)
        or prev.endswith(("，", "、", "和", "与", "及", "的", "等", "；", "（", "(", "["))
        or (
            len(prev) >= 16
            and not MAJOR_HINT.search(prev)
            and not prev.endswith(("）", ")", "★", "]", "】"))
        )
    )


_FRAGMENT_PREFIXES = (
    "与", "和", "、", "，", "的", "等", "；", "）", ")", "作办学",
    "联合培养", "子与", "学与", "上学位", "型人才", "培养项目",
    "意愿的", "按中", "赴", "院学习", "生，", "英语基础",
    "双学士", "复合型",
)


def _is_fragment_name(name: str) -> bool:
    if not name or len(name) < 2:
        return True
    # 明确续行前缀（即使后面像专业名也不拆成新行）
    if name.startswith(_FRAGMENT_PREFIXES):
        return True
    # 行中折断：生物→物信息学、系统→统科学与工程、建造→造、…
    if re.match(r"^物(?!理|流|业)", name):
        return True
    if re.match(r"^统(?!计)", name):
        return True
    if re.match(r"^用(?!于)", name):  # 应用化学 → 用化学
        return True
    if re.match(r"^(?:造|河|术|位|项)(?=、|，|工程|园林|复合|科学|\))", name) or re.match(
        r"^(?:造、|河工程|术、|位复合|项）)", name
    ):
        return True
    # 像新专业开头的绝不当地成碎片
    if _is_major_start_name(name):
        return False
    if FRAG_START.search(name):
        return True
    if re.fullmatch(r"[（(][^）)]{2,40}[）)]", name):
        return True
    if name.startswith(
        ("数学", "物理", "化学", "生物", "信息", "统计", "工程", "交通", "土木", "给排", "网络")
    ) and not _is_major_start_name(name):
        return True
    return False


def _is_continuation_of(prev: str, name: str) -> bool:
    """判断 name 是否应并入上一专业（折行/备注续写）。"""
    if not name:
        return True
    # 明确碎片前缀
    if _is_fragment_name(name):
        return True
    if prev.endswith(("、", "，", "和", "与", "及", "的", "等", "；", "（", "(", "[")):
        return True
    if not _is_name_incomplete(prev):
        return False
    # 上一行未闭合：仅非新专业标题的短收尾行才续写
    if _is_major_start_name(name) and not _is_fragment_name(name):
        return False
    if len(name) <= 24 and name.endswith(("）", ")", "】", "]")):
        return True
    if not _is_major_start_name(name):
        return True
    return False


def _should_merge_major(prev: str, prev_code: str, name: str, cur_code: str) -> bool:
    """是否把当前专业行并入上一条。"""
    # 不同专业代码 + 像新专业标题 → 绝不合并（优先于续行启发）
    if (
        cur_code
        and prev_code
        and cur_code != prev_code
        and _is_major_start_name(name)
        and not _is_fragment_name(name)
    ):
        return False
    if _is_continuation_of(prev, name):
        return True
    # 无专业代码
    if not cur_code:
        if _is_name_incomplete(prev) and not _is_major_start_name(name):
            return True
        if not _is_major_start_name(name) and (
            _is_name_incomplete(prev) or prev.endswith(("、", "，", "和", "与", "及"))
        ):
            return True
        return False
    if prev.endswith(("、", "，", "和", "与", "及")):
        return True
    if _is_name_incomplete(prev) and not _is_major_start_name(name):
        return True
    return False


# 备注/说明残片（常被 OCR 拆成“假专业”）
_NOTE_FRAGMENT = re.compile(
    r"(?:培养基地|实施基地|英才班|科技英才|拔尖学生培养|赴[美英澳加]|学期在|"
    r"联合培养方案|交流学习费用|本项目|建议考生|如不出国|无法获得|"
    r"专业课以英语|详询院校|查阅院校|色觉要求|入学后可转专业)"
)


def _looks_like_note_fragment(name: str) -> bool:
    if not name or len(name) < 4:
        return False
    # 折行备注起字（勿含「生」——生物医学/生物科学）
    if re.match(r"^[础沿院才设教仲料英制国交]", name):
        return True
    if name.startswith(("生培养", "生，", "生堂", "生院")):
        return True
    if _NOTE_FRAGMENT.search(name):
        # 「化学类（…培养基地…）」整段是专业带备注，不是残片
        if _is_major_start_name(name):
            return False
        return True
    if name.startswith(("才培养", "生培养", "养基地", "工程实施", "仲华", "设", "教育部", "交叉学科")):
        return True
    return False


def _major_core_name(name: str) -> str:
    return re.split(r"[（(\[]", name, 1)[0].strip()


# 仅拆「两个完整专业挤一行」的常见粘连，避免拆双学位/大类说明
_GLUE_RIGHT = re.compile(
    r"^(?:人工智能|飞行器适航技术|交通运输|信息安全|物联网工程|"
    r"智能科学与技术|临床医学类)(?:[（(]|$)"
)
_CAMPUS_NOTE = re.compile(
    r"(?:校区学习|学年在[^）)]{0,12}校区|须查阅|详询院校|招生章程)"
)


def _split_glued_major_name(name: str) -> list[str]:
    """同一 OCR 行粘连两个专业名时拆开。"""
    if not name or len(name) < 8:
        return [name]
    parts = re.split(
        r"(?<=[）)\]】])(?=(?:人工智能|飞行器适航技术|交通运输|信息安全|"
        r"物联网工程|临床医学类))",
        name,
    )
    out = [p.strip() for p in parts if p and p.strip()]
    if len(out) >= 2 and _GLUE_RIGHT.search(out[1]):
        if _major_core_name(out[0]) != _major_core_name(out[1]):
            return out
    # 无标点：飞行器适航技术交通运输 / 物联网工程信息安全
    for pat in (
        r"(?<=技术)(?=交通运输)",
        r"(?<=工程)(?=信息安全)",
    ):
        parts2 = re.split(pat, name)
        out2 = [p.strip() for p in parts2 if p and p.strip()]
        if len(out2) >= 2:
            return out2
    return [name]


def _set_mcode(majors: list[dict], codes: list[int | None], index: int, code: int) -> None:
    majors[index]["mcode"] = str(code).zfill(2)
    codes[index] = code


def _is_outlier_code(current: int | None, expected: int) -> bool:
    if current is None:
        return True
    return abs(current - expected) >= 5 or current < 10


def _infer_mcode(prev: int | None, nxt: int | None, index: int) -> int | None:
    if prev is not None and nxt is not None and nxt - prev == 2:
        return prev + 1
    if prev is not None and nxt is None:
        return prev + 1
    if prev is None and index == 0 and nxt is not None and nxt >= 2:
        return nxt - 1
    return None


def _fill_missing_mcodes(majors: list[dict]) -> list[dict]:
    """按相邻专业代码补漏/纠错（OCR 丢码或误识时）。"""
    codes: list[int | None] = []
    for m in majors:
        c = m.get("mcode") or ""
        codes.append(int(c) if c.isdigit() else None)

    # 夹在连续序号中间的离谱码（如 45,09,47 → 46）
    for i in range(1, len(codes) - 1):
        prev, cur, nxt = codes[i - 1], codes[i], codes[i + 1]
        if prev is None or nxt is None:
            continue
        if nxt == prev + 2:
            expected = prev + 1
            if cur != expected and _is_outlier_code(cur, expected):
                _set_mcode(majors, codes, i, expected)

    for i, c in enumerate(codes):
        if c is not None:
            continue
        prev = next((codes[j] for j in range(i - 1, -1, -1) if codes[j] is not None), None)
        nxt = next((codes[j] for j in range(i + 1, len(codes)) if codes[j] is not None), None)
        inferred = _infer_mcode(prev, nxt, i)
        if inferred is not None:
            _set_mcode(majors, codes, i, inferred)
    return majors


def _expand_glued_majors(majors: list[dict]) -> list[dict]:
    expanded: list[dict] = []
    for m in majors:
        name = (m.get("name") or "").strip()
        parts = _split_glued_major_name(name) if name else [""]
        if len(parts) == 1:
            expanded.append(m)
            continue
        for i, part in enumerate(parts):
            nm = dict(m)
            nm["name"] = part
            if i > 0:
                # 粘连后半段：专业代码/计划留给前半，后半留给后续行或补码
                nm["mcode"] = ""
                nm["plan"] = ""
                nm["year"] = ""
                nm["fee"] = ""
            expanded.append(nm)
    return expanded


def _attach_missing_fields(target: dict, source: dict) -> None:
    for key in ("mcode", "plan", "year", "fee"):
        if source.get(key) and not target.get(key):
            target[key] = source[key]


def _should_merge_current(out: list[dict], m: dict, name: str) -> bool:
    if not out:
        return False
    prev = out[-1].get("name") or ""
    prev_code = out[-1].get("mcode") or ""
    cur_code = m.get("mcode") or ""
    if _looks_like_note_fragment(name) and not (
        cur_code and prev_code and cur_code != prev_code and _is_major_start_name(name)
    ):
        return True
    return _should_merge_major(prev, prev_code, name, cur_code)


def _merge_major_into_last(out: list[dict], m: dict, name: str) -> None:
    last = out[-1]
    last["name"] = (last.get("name") or "") + name
    # 续行/备注残片上的错码不覆盖；仅当上一行无码且本行不像备注时才取码
    if (
        m.get("mcode")
        and not last.get("mcode")
        and not _looks_like_note_fragment(name)
        and not _is_fragment_name(name)
    ):
        last["mcode"] = m["mcode"]
    for key in ("plan", "year", "fee"):
        if m.get(key) and not last.get(key):
            last[key] = m[key]


def _fill_major_years(majors: list[dict]) -> None:
    for m in majors:
        if m.get("fee") in ("()", "（）"):
            m["fee"] = "0"
        if not m.get("year") and (m.get("fee") or m.get("plan")):
            name = m.get("name") or ""
            if any(k in name for k in ("医学", "临床", "口腔", "麻醉", "影像")):
                m["year"] = "8" if ("八年" in name or "八年制" in name) else "5"
            elif "建筑学" in name:
                m["year"] = "5"
            else:
                m["year"] = "4"


def normalize_majors(majors: list[dict]) -> list[dict]:
    """合并被拆断的专业名，并补常见学制。"""
    if not majors:
        return majors
    out: list[dict] = []
    for m in _expand_glued_majors(majors):
        name = (m.get("name") or "").strip()
        if not name:
            if out:
                _attach_missing_fields(out[-1], m)
            continue
        if out and _should_merge_current(out, m, name):
            _merge_major_into_last(out, m, name)
            continue
        out.append(
            {
                "mcode": m.get("mcode") or "",
                "name": name,
                "plan": m.get("plan") or "",
                "year": m.get("year") or "",
                "fee": m.get("fee") or "",
            }
        )
    out = _fill_missing_mcodes(out)
    _fill_major_years(out)
    return out


def _last_mcode_num(g: dict | None) -> int | None:
    if not g:
        return None
    for m in reversed(g.get("majors") or []):
        c = m.get("mcode") or ""
        if str(c).isdigit():
            return int(c)
    return None


def _codes_continue(g: dict | None, mcode: str, max_gap: int = 5) -> bool:
    last = _last_mcode_num(g)
    if last is None or not str(mcode).isdigit():
        return False
    c = int(mcode)
    return last < c <= last + max_gap


class _ColumnParser:

    def __init__(self, blocks: list[dict], side: str, carry: dict | None):
        self.spec = COL_SPECS[side]
        col = [b for b in blocks if self.spec["x0"] <= b["x"] < self.spec["x1"]]
        self.lines = cluster_lines(col)
        self.records: list[dict] = []
        self.cur = carry
        self.orphans: list[dict] = []
        self.seen_group = False

    @staticmethod
    def _attach_nums(m: dict, plan: str, year: str, fee: str, mcode: str = "") -> None:
        if mcode and not m.get("mcode"):
            m["mcode"] = mcode
        if plan and not m.get("plan"):
            m["plan"] = plan
        if year and not m.get("year"):
            m["year"] = year
        if fee and not m.get("fee"):
            m["fee"] = fee

    @staticmethod
    def _major_item(mcode: str, name: str, plan: str, year: str, fee: str) -> dict:
        return {"mcode": mcode, "name": name, "plan": plan, "year": year, "fee": fee}

    @staticmethod
    def _name_text(zones: dict[str, list[dict]]) -> str:
        text = "".join(b["text"] for b in zones.get("name", []) + zones.get("other", [])).strip()
        return text.replace("|", "").replace("｜", "")

    @staticmethod
    def _initial_mcode(zones: dict[str, list[dict]], name_text: str) -> tuple[str, str, str]:
        raws = [b["text"] for b in zones.get("mcode", [])]
        joined = "".join(raws).replace(" ", "")
        # 代号区六位/四位与校名分行：138134 + 扬州大学34专业组
        if "专业组" in name_text and re.fullmatch(r"\d{6}", joined):
            return "", "", joined + name_text
        if "专业组" in name_text and re.fullmatch(r"\d{4}", joined):
            return "", "", joined + name_text
        mcode = ""
        for text in raws:
            code = _norm_mcode(text)
            if code:
                mcode = code
        return mcode, joined, name_text

    @staticmethod
    def _numeric_fields(zones: dict[str, list[dict]]) -> tuple[str, str, str]:
        plan = year = fee = ""
        for b in zones.get("plan", []):
            value = _norm_plan(b["text"])
            if value:
                plan = value
        for b in zones.get("year", []):
            value = _norm_year(b["text"])
            if value:
                year = value
        for b in zones.get("fee", []):
            value = _norm_fee(b["text"])
            if value:
                fee = value
        return plan, year, fee

    @staticmethod
    def _strip_leading_code(name_text: str, mcode: str) -> tuple[str, str]:
        match = re.match(r"^[（(]?(\d{1,2})[）)]?(?=[\u4e00-\u9fffA-Za-z（(★])", name_text)
        if not match:
            return name_text, mcode
        return name_text[match.end():].strip(), match.group(1).zfill(2)

    @staticmethod
    def _looks_like_major(major_name: str) -> bool:
        return bool(
            major_name
            and len(major_name) >= 2
            and re.search(r"[\u4e00-\u9fff]", major_name)
            and "专业组" not in major_name
            and not NOTE_LINE.search(major_name)
        )

    def _finalize(self, group: dict) -> dict:
        cleaned = []
        for m in group.get("majors") or []:
            name = (m.get("name") or "").strip()
            if not name or "专业组" in name:
                if m.get("mcode") or m.get("plan") or m.get("year") or m.get("fee"):
                    cleaned.append(m)
                continue
            if len(name) < 2:
                continue
            cleaned.append(m)
        group["majors"] = normalize_majors(cleaned)
        return group

    def _flush(self) -> None:
        if self.cur and self.cur.get("group"):
            self.records.append(self._finalize(self.cur))
        self.cur = None

    def _new_group(self, code: str, grp: str, title: str) -> None:
        self._flush()
        self.seen_group = True
        self.cur = {
            "code": code.zfill(4),
            "group": grp,
            "group_title": title.strip(),
            "majors": [],
            "notes": [],
        }

    def _add_orphan(self, item: dict) -> None:
        if not self.seen_group:
            self.orphans.append(item)

    def _check_mcode_order(self, mcode: str) -> tuple[bool, str]:
        if not (mcode and str(mcode).isdigit()):
            return False, mcode
        last = _last_mcode_num(self.cur)
        if last is None:
            return False, mcode
        c = int(mcode)
        weird_small = c < 10 and last >= 10
        backward = (not weird_small) and c + 5 < last and c >= 10
        forward = c > last + 15
        if backward or forward:
            return True, mcode
        if weird_small and c != last:
            # 丢弃残码，留给 _fill_missing_mcodes 补
            return False, ""
        return False, mcode

    def _merge_last_major(self, mcode: str, name: str, plan: str, year: str, fee: str) -> bool:
        majors = self.cur.get("majors") if self.cur is not None else None
        if not majors:
            return False
        last = majors[-1]
        prev = last.get("name") or ""
        last_code = last.get("mcode") or ""
        is_cont = _looks_like_note_fragment(name) or _should_merge_major(
            prev, last_code, name, mcode
        )
        if not is_cont:
            return False
        last["name"] = (last.get("name") or "") + name
        # 碎片/备注行上的错码不覆盖上一专业代码
        use_code = (
            ""
            if (last_code and (_is_fragment_name(name) or _looks_like_note_fragment(name)))
            else mcode
        )
        self._attach_nums(last, plan, year, fee, use_code)
        return True

    def _append_major(self, mcode: str, name: str, plan: str, year: str, fee: str) -> None:
        item = self._major_item(mcode, name, plan, year, fee)
        if self.cur is None:
            self._add_orphan(item)
            return
        break_group, mcode = self._check_mcode_order(mcode)
        item["mcode"] = mcode
        if break_group:
            self._flush()
            self._add_orphan(item)
            return
        if self.cur is None:
            self._add_orphan(item)
            return
        if self._merge_last_major(mcode, name, plan, year, fee):
            return
        majors = self.cur.get("majors")
        if majors is not None:
            majors.append(item)

    def _zones(self, line: list[dict]) -> dict[str, list[dict]]:
        zones: dict[str, list[dict]] = {
            "name": [], "plan": [], "year": [], "fee": [], "mcode": [], "other": []
        }
        for b in line:
            zones.setdefault(_zone(b, self.spec), []).append(b)
        return zones

    def _prepend_group_code(self, name_text: str, mcode: str, joined: str) -> tuple[str, str]:
        if "专业组" not in name_text or GROUP_RE.search(name_text):
            return name_text, mcode
        match = re.search(
            r"(?P<title>[\u4e00-\u9fffA-Za-z0-9（）()·\-]{2,50}?(?P<grp>\d{2})专业组\s*[（(][^）)]+[）)])",
            name_text,
        )
        if not match:
            return name_text, mcode
        if re.fullmatch(r"\d{6}", joined):
            return joined + match.group("title"), ""
        if re.fullmatch(r"\d{4}", joined):
            return joined + match.group("grp") + match.group("title"), ""
        if self.cur is not None:
            return self.cur["code"] + match.group("grp") + match.group("title"), ""
        return name_text, mcode

    def _strip_name_mcode(self, name_text: str, mcode: str) -> tuple[str, str]:
        if mcode:
            return name_text, mcode
        if "专业组" not in name_text:
            return self._strip_leading_code(name_text, mcode)
        if re.match(r"^\d{6}", name_text):
            # 已是 138134扬州大学34专业组…，不要剥前缀
            return name_text, mcode
        if re.match(r"^\d{4}", name_text):
            return name_text, mcode
        return self._strip_leading_code(name_text, mcode)

    def _handle_group_header(self, name_text: str, plan: str) -> bool:
        match = GROUP_RE.search(name_text)
        if not match:
            return False
        full = name_text[match.start():]
        full = re.sub(r"^\d{4,6}\s*", "", full)
        self._new_group(match.group("code"), match.group("grp"), full or match.group("title"))
        if plan and self.cur is not None:
            self.cur["group_plan"] = plan
        return True

    def _is_note_continuation(self, name_text: str, mcode: str, plan: str, fee: str) -> bool:
        if not name_text or self.cur is None or not self.cur.get("notes"):
            return False
        if mcode or plan or fee or _is_major_start_name(name_text):
            return False
        if _CAMPUS_NOTE.search(name_text) or NOTE_LINE.search(name_text):
            return True
        return bool(
            FRAG_START.search(name_text)
            and not re.search(r"(?:学|工程|技术|类|班|园林)[）)]?$", name_text)
        )

    def _handle_notes(self, name_text: str, mcode: str, plan: str, fee: str) -> bool:
        if name_text and NOTE_LINE.search(name_text):
            if self.cur is not None:
                self.cur["notes"].append(name_text)
            return True
        if not self._is_note_continuation(name_text, mcode, plan, fee):
            return False
        if self.cur is not None:
            self.cur["notes"].append(name_text)
        return True

    def _handle_campus_note(self, major_name: str) -> bool:
        if not major_name or self.cur is None:
            return False
        if not (
            _CAMPUS_NOTE.search(major_name)
            and not _is_major_start_name(major_name)
            and "学制" not in major_name
        ):
            return False
        self.cur["notes"].append(major_name)
        return True

    def _append_to_current(self, item: dict) -> bool:
        if self.cur is None:
            return False
        majors = self.cur.get("majors")
        if majors is None:
            return False
        majors.append(item)
        return True

    def _handle_mcode_only(
        self, mcode: str, plan: str, year: str, fee: str, looks_like_major: bool
    ) -> bool:
        if not mcode or looks_like_major:
            return False
        target = None
        if self.cur is not None and self.cur.get("majors"):
            target = self.cur["majors"][-1]
        elif self.orphans:
            target = self.orphans[-1]
        item = self._major_item(mcode, "", plan, year, fee)
        if target is None:
            if not self._append_to_current(item) and not self.seen_group:
                self.orphans.append(item)
            return True
        if not target.get("mcode") or target.get("mcode") == mcode:
            self._attach_nums(target, plan, year, fee, mcode)
        elif not self._append_to_current(item) and not self.seen_group:
            self.orphans.append(item)
        return True

    def _attach_numeric_tail(
        self, name_text: str, mcode: str, plan: str, year: str, fee: str
    ) -> None:
        if not (plan or year or fee or mcode):
            return
        majors = self.cur.get("majors") if self.cur is not None else None
        if majors:
            self._attach_nums(majors[-1], plan, year, fee, mcode)
        elif self.orphans:
            self._attach_nums(self.orphans[-1], plan, year, fee, mcode)
        elif self.cur is not None and name_text:
            notes = self.cur.get("notes")
            if notes is not None:
                notes.append(name_text)

    def _parse_line_fields(
        self, line: list[dict]
    ) -> tuple[str, str, str, str, str]:
        zones = self._zones(line)
        name_text = self._name_text(zones)
        mcode, joined, name_text = self._initial_mcode(zones, name_text)
        name_text, mcode = self._prepend_group_code(name_text, mcode, joined)
        plan, year, fee = self._numeric_fields(zones)
        name_text, mcode = self._strip_name_mcode(name_text, mcode)
        return name_text, mcode, plan, year, fee

    def _skip_line(self, name_text: str, mcode: str, plan: str, year: str, fee: str) -> bool:
        if SKIP_LINE.search(name_text) and "以下" not in name_text and "报考" not in name_text:
            return True
        return not name_text and not mcode and not (plan or year or fee)

    def _handle_heading(self, name_text: str, plan: str) -> bool:
        if self._handle_group_header(name_text, plan):
            return True
        return bool(SCHOOL_RE.match(name_text) and "专业组" not in name_text)

    def _append_major_parts(
        self, major_name: str, mcode: str, plan: str, year: str, fee: str
    ) -> None:
        for pi, part in enumerate(_split_glued_major_name(major_name)):
            part_mcode = part_plan = part_year = part_fee = ""
            if pi == 0:
                part_mcode, part_plan, part_year, part_fee = mcode, plan, year, fee
            self._append_major(part_mcode, part, part_plan, part_year, part_fee)

    def _process_line(self, line: list[dict]) -> None:
        name_text, mcode, plan, year, fee = self._parse_line_fields(line)
        if self._skip_line(name_text, mcode, plan, year, fee):
            return
        if self._handle_heading(name_text, plan):
            return
        if self._handle_notes(name_text, mcode, plan, fee):
            return
        major_name = name_text.strip()
        if self._handle_campus_note(major_name):
            return
        looks_like_major = self._looks_like_major(major_name)
        if self._handle_mcode_only(mcode, plan, year, fee, looks_like_major):
            return
        if not looks_like_major:
            self._attach_numeric_tail(name_text, mcode, plan, year, fee)
            return
        self._append_major_parts(major_name, mcode, plan, year, fee)

    def _run(self) -> tuple[list[dict], dict | None, list[dict]]:
        for line in self.lines:
            self._process_line(line)
        # 跨页：不 flush 当前组，交给下一页 continue
        return self.records, self.cur, self.orphans


def parse_column(
    blocks: list[dict], side: str, carry: dict | None = None
) -> tuple[list[dict], dict | None, list[dict]]:
    """Parse one half-page column.
    返回 (已结束组, 未结束组, 组标题出现前的孤儿专业)。
    """
    return _ColumnParser(blocks, side, carry)._run()


def _merge_group_record(out: dict, r: dict) -> None:
    keys = [
        (r["code"].zfill(4), r["group"]),
        (r["code"].lstrip("0") or "0", r["group"]),
    ]
    primary = keys[0]
    group = out.get(primary)
    if group is None:
        base = {
            "code": r["code"].zfill(4),
            "group": r["group"],
            "group_title": r.get("group_title", ""),
            "majors": list(r.get("majors", [])),
            "notes": list(r.get("notes", [])),
            "group_plan": r.get("group_plan", ""),
        }
        for k in keys:
            out[k] = base
        return
    existing = {(m.get("mcode"), m.get("name"), m.get("plan")) for m in group["majors"]}
    for m in r.get("majors", []):
        key = (m.get("mcode"), m.get("name"), m.get("plan"))
        if key not in existing:
            group["majors"].append(m)
            existing.add(key)
    for note in r.get("notes", []):
        if note not in group["notes"]:
            group["notes"].append(note)
    if not group["group_title"] and r.get("group_title"):
        group["group_title"] = r["group_title"]


def _normalize_merged_groups(out: dict) -> None:
    seen = set()
    for v in out.values():
        vid = id(v)
        if vid in seen:
            continue
        seen.add(vid)
        v["majors"] = normalize_majors(v.get("majors") or [])


def merge_records(recs: list[dict]) -> dict:
    out: dict = {}
    for r in recs:
        _merge_group_record(out, r)
    # 跨页合并后再做一次碎片归一
    _normalize_merged_groups(out)
    return out


def iter_major_rows(rec: dict) -> list[tuple[str, str, str, str, str, str]]:
    """(group_title, mcode, name, plan, year, fee) per major."""
    title = rec.get("group_title") or f"{rec['group']}专业组"
    majors = [m for m in (rec.get("majors") or []) if (m.get("name") or m.get("mcode"))]
    note = "；".join(rec.get("notes") or [])
    if not majors:
        name = f"（备注：{note}）" if note else ""
        return [(title, "", name, "", "", "")]
    rows = []
    for i, m in enumerate(majors):
        name = m.get("name") or ""
        if i == 0 and note:
            # 组备注过长时不塞进专业名，仅短备注保留
            if len(note) <= 40:
                name = f"{name}（备注：{note}）" if name else f"（备注：{note}）"
        rows.append(
            (
                title,
                m.get("mcode") or "",
                name,
                m.get("plan") or "",
                m.get("year") or "",
                m.get("fee") or "",
            )
        )
    return rows


def unique_plan_groups(plan_map: dict) -> list[dict]:
    seen = set()
    out = []
    for k, v in plan_map.items():
        if len(str(k[0])) != 4:
            continue
        key = (v["code"], v["group"])
        if key in seen:
            continue
        seen.add(key)
        out.append(v)
    out.sort(key=lambda r: (r["code"], r["group"]))
    return out


def _write_plan_header(ws) -> None:
    headers = [
        "代号",
        "院校、专业组（再选科目要求）",
        "专业代码",
        "专业名称及备注",
        "计划数",
        "学制",
        "学费",
        "组备注",
    ]
    header_fill = PatternFill("solid", fgColor="4472C4")
    header_font = Font(bold=True, color="FFFFFF")
    for i, h in enumerate(headers, 1):
        cell = ws.cell(1, i, h)
        cell.fill = header_fill
        cell.font = header_font
        cell.alignment = Alignment(horizontal="center", wrap_text=True)
    ws.cell(1, 1).value  # keep


def _write_plan_group_rows(ws, row: int, rec: dict) -> int:
    title = rec.get("group_title") or f"{rec['code']}{rec['group']}专业组"
    note = "；".join(rec.get("notes") or [])
    majors = [m for m in (rec.get("majors") or []) if m.get("name") or m.get("mcode")]
    if not majors:
        ws.cell(row, 1, rec["code"])
        ws.cell(row, 2, title)
        ws.cell(row, 8, note)
        return row + 1
    for i, m in enumerate(majors):
        ws.cell(row, 1, rec["code"])
        ws.cell(row, 2, title)
        ws.cell(row, 3, m.get("mcode") or "")
        ws.cell(row, 4, m.get("name") or "")
        ws.cell(row, 5, m.get("plan") or "")
        ws.cell(row, 6, m.get("year") or "")
        ws.cell(row, 7, m.get("fee") or "")
        if i == 0 and note:
            ws.cell(row, 8, note)
        row += 1
    return row


def _save_plan_workbook(wb, out: Path, rows: int) -> Path:
    try:
        wb.save(out)
    except PermissionError:
        alt = out.with_name(out.stem + "_新" + out.suffix)
        wb.save(alt)
        print(f"计划表被占用，已另存为 {alt}")
        return alt
    print(f"plan excel saved {out} rows={rows}")
    return out


def export_plan_excel(plan_map: dict, path: Path | None = None) -> Path:
    """导出招生计划扁平表：每专业代码一行。"""
    if WORK_DIR is None:
        raise RuntimeError("WORK_DIR 未初始化")
    out = path or (WORK_DIR / "26招生计划_物理本科.xlsx")
    wb = Workbook()
    ws = wb.active
    ws.title = "物理本科招生计划"
    _write_plan_header(ws)
    row = 2
    for rec in unique_plan_groups(plan_map):
        row = _write_plan_group_rows(ws, row, rec)
    widths = [8, 42, 10, 48, 10, 8, 12, 36]
    for i, w in enumerate(widths, 1):
        ws.column_dimensions[get_column_letter(i)].width = w
    return _save_plan_workbook(wb, out, row - 2)


def extract_group_from_toudang(name: str) -> str | None:
    m = re.search(r"(\d{2})专业组", str(name or ""))
    return m.group(1) if m else None


def parse_blocks(
    blocks: list[dict],
    carry_left: dict | None = None,
    carry_right: dict | None = None,
) -> tuple[list[dict], dict | None, dict | None]:
    """左右栏独立跨页延续；右栏页首孤儿若接续左栏未完成组则并入左栏。"""
    left_recs, carry_left, left_orphans = parse_column(blocks, "left", carry_left)
    if left_orphans and carry_left and _codes_continue(
        carry_left, (left_orphans[0].get("mcode") or ""), max_gap=8
    ):
        carry_left["majors"].extend(left_orphans)
        left_orphans = []
    elif left_orphans and carry_left is None:
        # 无承接组的孤儿丢弃（缺组标题的页首噪声）
        left_orphans = []

    right_recs, carry_right, right_orphans = parse_column(blocks, "right", carry_right)

    # 同页左栏未完成组 → 右栏开头续行（如南航07: 左栏到93，右栏94起）
    if right_orphans and carry_left and _codes_continue(
        carry_left, (right_orphans[0].get("mcode") or ""), max_gap=8
    ):
        carry_left["majors"].extend(right_orphans)
        right_orphans = []
    elif right_orphans and carry_right and _codes_continue(
        carry_right, (right_orphans[0].get("mcode") or ""), max_gap=8
    ):
        carry_right["majors"].extend(right_orphans)
        right_orphans = []
    # else: 不连续孤儿丢弃

    return left_recs + right_recs, carry_left, carry_right


def _finalize_open_group(g: dict | None) -> dict | None:
    if not g or not g.get("group"):
        return None
    cleaned = []
    for m in g.get("majors") or []:
        name = (m.get("name") or "").strip()
        if not name or "专业组" in name:
            if m.get("mcode") or m.get("plan") or m.get("year") or m.get("fee"):
                cleaned.append(m)
            continue
        if len(name) < 2:
            continue
        cleaned.append(m)
    g["majors"] = normalize_majors(cleaned)
    return g


def run_ocr_all(force_reparse: bool = False) -> dict:
    cache: dict = {}
    if CACHE.exists():
        cache = json.loads(CACHE.read_text(encoding="utf-8"))
        print(f"loaded cache pages: {len(cache)}")

    ocr = None
    doc = fitz.open(PDF)
    all_recs: list[dict] = []
    carry_left = carry_right = None

    for pno in range(PAGE_START, PAGE_END + 1):
        key = str(pno)
        if key in cache:
            blocks = cache[key]
            print(f"page {pno}: cache {len(blocks)} blocks")
        else:
            if ocr is None:
                ocr = RapidOCR()
            t0 = time.time()
            img = render_page(doc, pno - 1)
            blocks = ocr_page(ocr, img)
            cache[key] = blocks
            if pno % 5 == 0 or pno == PAGE_END:
                CACHE.write_text(json.dumps(cache, ensure_ascii=False), encoding="utf-8")
            print(f"page {pno}: ocr {len(blocks)} blocks in {time.time() - t0:.1f}s")
        recs, carry_left, carry_right = parse_blocks(blocks, carry_left, carry_right)
        all_recs.extend(recs)

    for g in (_finalize_open_group(carry_left), _finalize_open_group(carry_right)):
        if g:
            all_recs.append(g)

    merged = merge_records(all_recs)
    uniq = {}
    for k, v in merged.items():
        if len(k[0]) == 4:
            uniq[f"{k[0]}_{k[1]}"] = v
    PLAN_JSON.write_text(json.dumps(uniq, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"parsed unique groups: {len(uniq)}")
    return merged


def lookup(plan_map: dict, code, group: str) -> dict | None:
    code_s = str(code).strip()
    for k in (
        (code_s.zfill(4), group),
        (code_s.lstrip("0") or "0", group),
        (code_s, group),
    ):
        if k in plan_map:
            return plan_map[k]
    return None


def configure(
    work_dir: Path,
    pdf: Path | None = None,
    toudang: Path | None = None,
    out: Path | None = None,
    plan_out: Path | None = None,
    page_start: int = 119,
    page_end: int = 260,
    dpi: int = 120,
) -> None:
    global WORK_DIR, PDF, XLSX_IN, XLSX_OUT, CACHE, PLAN_JSON, PAGE_START, PAGE_END, DPI
    global PLAN_XLSX
    WORK_DIR = work_dir.resolve()
    WORK_DIR.mkdir(parents=True, exist_ok=True)
    PDF = Path(pdf).resolve() if pdf else next(WORK_DIR.glob("*.pdf"))
    XLSX_IN = Path(toudang).resolve() if toudang else next(WORK_DIR.glob("*投档线.xlsx"))
    XLSX_OUT = Path(out).resolve() if out else WORK_DIR / "26高考专业和投档线.xlsx"
    PLAN_XLSX = (
        Path(plan_out).resolve() if plan_out else WORK_DIR / "26招生计划_物理本科.xlsx"
    )
    CACHE = WORK_DIR / "_plan_ocr_cache.json"
    PLAN_JSON = WORK_DIR / "_plan_physics_parsed.json"
    PAGE_START = page_start
    PAGE_END = page_end
    DPI = dpi


def _copy_toudang_header(ws_in, ws, max_col: int) -> None:
    for r in range(1, 6):
        for c in range(1, max_col + 1):
            cell = ws_in.cell(r, c)
            nc = ws.cell(r, c, cell.value)
            if not cell.has_style:
                continue
            try:
                nc.font = cell.font.copy()
                nc.alignment = cell.alignment.copy()
                nc.fill = cell.fill.copy()
                nc.border = cell.border.copy()
            except Exception:
                pass


def _write_extra_headers(ws, max_col: int) -> None:
    extra = ["专业组名称", "专业代码", "专业名称及备注", "计划数", "学制", "学费"]
    header_fill = PatternFill("solid", fgColor="4472C4")
    header_font = Font(bold=True, color="FFFFFF")
    for i, h in enumerate(extra):
        cell = ws.cell(5, max_col + 1 + i, h)
        cell.fill = header_fill
        cell.font = header_font
        cell.alignment = Alignment(horizontal="center", wrap_text=True)
    ws.cell(1, max_col + 1, "（扩表：按专业代码分行）")


def _write_major_block(ws, out_row: int, base_vals: list, max_col: int, major_rows: list) -> int:
    for title, mcode, maj, plan, year, fee in major_rows:
        for c, v in enumerate(base_vals, 1):
            ws.cell(out_row, c, v)
        ws.cell(out_row, max_col + 1, title)
        ws.cell(out_row, max_col + 2, mcode)
        ws.cell(out_row, max_col + 3, maj)
        ws.cell(out_row, max_col + 4, plan)
        ws.cell(out_row, max_col + 5, year)
        ws.cell(out_row, max_col + 6, fee)
        out_row += 1
    return out_row


def _row_state(code, name) -> tuple[bool, object | None]:
    """Return (skip, footer_note) for one 投档线 row."""
    if code is None and name and "注：" in str(name):
        return True, name
    if code is None and not name:
        return True, None
    if code is not None and isinstance(code, str) and "注" in code:
        return True, code
    return False, None


def _find_trailing_footer(ws_in):
    note = ws_in.cell(ws_in.max_row, 1).value
    if note and "注" in str(note):
        return note
    return None


def _save_toudang_workbook(wb, out: Path) -> None:
    try:
        wb.save(out)
        print(f"saved {out}")
    except PermissionError:
        alt = out.with_name(out.stem + "_按专业代码" + out.suffix)
        wb.save(alt)
        print(f"原文件被占用，已另存为 {alt}")


def build_excel(plan_map: dict):
    """Expand each 投档线 row into one Excel row per 专业代码."""
    if XLSX_IN is None or XLSX_OUT is None:
        raise RuntimeError("XLSX_IN/XLSX_OUT 未初始化")
    wb_in = load_workbook(XLSX_IN)
    ws_in = wb_in.active
    wb = Workbook()
    ws = wb.active
    ws.title = "专业和投档线"
    max_col = ws_in.max_column
    _copy_toudang_header(ws_in, ws, max_col)
    _write_extra_headers(ws, max_col)

    matched_groups = unmatched_groups = 0
    out_row = 6
    footer_note = None
    for r in range(6, ws_in.max_row + 1):
        code = ws_in.cell(r, 1).value
        name = ws_in.cell(r, 2).value
        skip, note = _row_state(code, name)
        if skip:
            if note is not None:
                footer_note = note
                break
            continue
        base_vals = [ws_in.cell(r, c).value for c in range(1, max_col + 1)]
        grp = extract_group_from_toudang(name)
        rec = lookup(plan_map, code, grp) if grp else None
        if rec:
            major_rows = iter_major_rows(rec)
            matched_groups += 1
        else:
            major_rows = [("", "", "", "", "", "")]
            unmatched_groups += 1
        out_row = _write_major_block(ws, out_row, base_vals, max_col, major_rows)

    if footer_note is None:
        footer_note = _find_trailing_footer(ws_in)
    if footer_note:
        ws.cell(out_row, 1, footer_note)
    widths = [8, 42, 10, 10, 10, 10, 10, 10, 8, 32, 10, 48, 10, 8, 12]
    for i, w in enumerate(widths, 1):
        ws.column_dimensions[get_column_letter(i)].width = w
    _save_toudang_workbook(wb, XLSX_OUT)
    print(
        f"matched_groups={matched_groups} unmatched_groups={unmatched_groups} data_rows={out_row - 6}"
    )
    return matched_groups, unmatched_groups


def reparse_from_cache() -> dict | None:
    if CACHE is None or PLAN_JSON is None:
        raise RuntimeError("CACHE/PLAN_JSON 未初始化")
    if not CACHE.exists():
        return None
    cache = json.loads(CACHE.read_text(encoding="utf-8"))
    need = {str(p) for p in range(PAGE_START, PAGE_END + 1)}
    if not need.issubset(cache.keys()):
        return None
    print(f"reparse from cache ({len(need)} pages), skip OCR")
    all_recs = []
    carry_left = carry_right = None
    for pno in range(PAGE_START, PAGE_END + 1):
        recs, carry_left, carry_right = parse_blocks(
            cache[str(pno)], carry_left, carry_right
        )
        all_recs.extend(recs)
    for g in (_finalize_open_group(carry_left), _finalize_open_group(carry_right)):
        if g:
            all_recs.append(g)
    plan_map = merge_records(all_recs)
    uniq = {f"{k[0]}_{k[1]}": v for k, v in plan_map.items() if len(k[0]) == 4}
    PLAN_JSON.write_text(json.dumps(uniq, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"parsed unique groups: {len(uniq)}")
    return plan_map


def cmd_merge(args: argparse.Namespace) -> None:
    configure(
        work_dir=Path(args.work_dir),
        pdf=Path(args.pdf) if args.pdf else None,
        toudang=Path(args.toudang) if args.toudang else None,
        out=Path(args.out) if args.out else None,
        plan_out=Path(args.plan_out) if getattr(args, "plan_out", None) else None,
        page_start=args.page_start,
        page_end=args.page_end,
        dpi=args.dpi,
    )
    if PDF is None or XLSX_IN is None or XLSX_OUT is None:
        raise RuntimeError("PDF/XLSX_IN/XLSX_OUT 未初始化")
    print("PDF:", PDF)
    print("XLSX:", XLSX_IN)
    print("OUT:", XLSX_OUT)
    print("PLAN:", PLAN_XLSX)
    print("pages:", PAGE_START, "-", PAGE_END)

    plan_map = None
    if not args.force_ocr:
        plan_map = reparse_from_cache()
    if plan_map is None:
        plan_map = run_ocr_all()
    export_plan_excel(plan_map, PLAN_XLSX)
    build_excel(plan_map)


def cmd_plan(args: argparse.Namespace) -> None:
    """仅解析 PDF→招生计划 xlsx（不合并投档线）。"""
    configure(
        work_dir=Path(args.work_dir),
        pdf=Path(args.pdf) if args.pdf else None,
        toudang=Path(args.toudang) if args.toudang else None,
        plan_out=Path(args.plan_out) if args.plan_out else None,
        page_start=args.page_start,
        page_end=args.page_end,
        dpi=args.dpi,
    )
    plan_map = None
    if not args.force_ocr:
        plan_map = reparse_from_cache()
    if plan_map is None:
        plan_map = run_ocr_all()
    export_plan_excel(plan_map, PLAN_XLSX)


def main():
    parser = argparse.ArgumentParser(
        description="gktd：江苏招生计划 PDF OCR + 投档线 Excel 扩表"
    )
    sub = parser.add_subparsers(dest="cmd", required=True)

    def add_common(p):
        p.add_argument("--work-dir", default="gaokao/toudang", help="工作目录")
        p.add_argument("--pdf", default=None, help="招生计划 PDF")
        p.add_argument("--page-start", type=int, default=119)
        p.add_argument("--page-end", type=int, default=260)
        p.add_argument("--dpi", type=int, default=120)
        p.add_argument("--force-ocr", action="store_true")
        p.add_argument(
            "--plan-out",
            default=None,
            help="招生计划 xlsx 输出；默认 work-dir/26招生计划_物理本科.xlsx",
        )

    p_merge = sub.add_parser("merge", help="解析招生计划并扩表合并到投档线")
    add_common(p_merge)
    p_merge.add_argument("--toudang", default=None, help="投档线 xlsx")
    p_merge.add_argument("--out", default=None, help="合并结果 xlsx")
    p_merge.set_defaults(func=cmd_merge)

    p_plan = sub.add_parser("plan", help="仅导出招生计划 xlsx（按专业代码分行）")
    add_common(p_plan)
    p_plan.add_argument("--toudang", default=None, help="unused")
    p_plan.set_defaults(func=cmd_plan)

    args = parser.parse_args()
    args.func(args)


if __name__ == "__main__":
    main()
